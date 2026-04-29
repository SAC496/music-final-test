const STORAGE_KEY = "songcards-deck";
const talkingDrumCard = {
  trackId: "5SQCSiFsP7bIREv5h3y5Bp",
  answer:
    "10-1: Talking Drum\nTalking drum (atumpan) mimics speech\nCopies pitch, rhythm, and tone of language\nWorks because of tonal languages (like Twi)\nSame word = different meaning depending on the pitch\nUsed to communicate proverbs, messages, and history\nConnected to Akan culture (Ghana)\nMatrilineal Society\nLeadership through Nana (Chiefs)",
};

const defaultDeck = [
  talkingDrumCard,
  {
    trackId: "7ouMYWpwJ422jRcDASZB7P",
    answer: "Coldplay - Viva la Vida",
  },
  {
    trackId: "1301WleyT98MSxVHPZCA6M",
    answer: "Kanye West - Stronger",
  },
  {
    trackId: "3AJwUDP919kvQ9QcozQPxg",
    answer: "The Weeknd - Blinding Lights",
  },
];

const form = document.getElementById("addCardForm");
const spotifyUrlInput = document.getElementById("spotifyUrl");
const cardAnswerInput = document.getElementById("cardAnswer");
const formMessage = document.getElementById("formMessage");

const counter = document.getElementById("counter");
const cardShell = document.getElementById("cardShell");
const flashcard = document.getElementById("flashcard");
const prevBtn = document.getElementById("prevBtn");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetDeckBtn = document.getElementById("resetDeck");

let deck = ensureFeaturedFirstCard(loadDeck());
let currentIndex = 0;
let isFlipped = false;

persistDeck();
renderCard();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const spotifyUrl = spotifyUrlInput.value.trim();
  const answer = cardAnswerInput.value.trim();

  if (!spotifyUrl || !answer) {
    setFormMessage("Please provide both fields.", true);
    return;
  }

  const trackId = extractSpotifyTrackId(spotifyUrl);
  if (!trackId) {
    setFormMessage(
      "That link does not look like a Spotify track URL. Paste a track link.",
      true
    );
    return;
  }

  deck.push({ trackId, answer });
  persistDeck();

  currentIndex = deck.length - 1;
  isFlipped = false;
  renderCard();

  form.reset();
  setFormMessage("Card added to your deck.");
});

flipBtn.addEventListener("click", () => {
  if (!deck.length) {
    return;
  }
  isFlipped = !isFlipped;
  flashcard.classList.toggle("flipped", isFlipped);
});

nextBtn.addEventListener("click", () => {
  if (!deck.length) {
    return;
  }
  currentIndex = (currentIndex + 1) % deck.length;
  isFlipped = false;
  renderCard();
});

prevBtn.addEventListener("click", () => {
  if (!deck.length) {
    return;
  }
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  isFlipped = false;
  renderCard();
});

shuffleBtn.addEventListener("click", () => {
  if (deck.length < 2) {
    return;
  }
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  currentIndex = 0;
  isFlipped = false;
  persistDeck();
  renderCard();
});

resetDeckBtn.addEventListener("click", () => {
  deck = [...defaultDeck];
  currentIndex = 0;
  isFlipped = false;
  persistDeck();
  renderCard();
  setFormMessage("Deck reset to starter songs.");
});

function renderCard() {
  flashcard.classList.remove("flipped");
  isFlipped = false;

  if (!deck.length) {
    cardShell.classList.add("empty");
    counter.textContent = "0 / 0";
    flashcard.innerHTML = `
      <div class="face front">
        <p>Your deck is empty. Add a track to begin.</p>
      </div>
      <div class="face back">
        <p>Answer side</p>
      </div>
    `;
    return;
  }

  cardShell.classList.remove("empty");
  const card = deck[currentIndex];
  const embedSrc = `https://open.spotify.com/embed/track/${card.trackId}?utm_source=generator`;

  flashcard.innerHTML = `
    <div class="face front">
      <div class="spotify-frame-wrap" aria-label="Spotify player">
        <iframe
          src="${embedSrc}"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div class="spotify-mask" aria-hidden="true"></div>
      </div>
    </div>
    <div class="face back">
      <p>${escapeHtml(card.answer)}</p>
    </div>
  `;

  counter.textContent = `${currentIndex + 1} / ${deck.length}`;
}

function extractSpotifyTrackId(urlValue) {
  const raw = urlValue.trim();

  const uriMatch = raw.match(/^spotify:track:([a-zA-Z0-9]+)$/);
  if (uriMatch) {
    return uriMatch[1];
  }

  try {
    const url = new URL(raw);
    const parts = url.pathname.split("/").filter(Boolean);
    const trackIndex = parts.indexOf("track");

    if (trackIndex === -1 || !parts[trackIndex + 1]) {
      return "";
    }

    return parts[trackIndex + 1];
  } catch {
    return "";
  }
}

function loadDeck() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [...defaultDeck];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [...defaultDeck];
    }

    return parsed.filter(
      (card) =>
        card && typeof card.trackId === "string" && typeof card.answer === "string"
    );
  } catch {
    return [...defaultDeck];
  }
}

function ensureFeaturedFirstCard(cards) {
  if (!Array.isArray(cards)) {
    return [talkingDrumCard, ...defaultDeck.slice(1)];
  }

  const existingIndex = cards.findIndex(
    (card) => card && card.trackId === talkingDrumCard.trackId
  );

  if (existingIndex === -1) {
    return [talkingDrumCard, ...cards];
  }

  const reordered = [...cards];
  const [existing] = reordered.splice(existingIndex, 1);
  // Keep this featured card consistent if an older saved version is in storage.
  reordered.unshift({
    ...existing,
    trackId: talkingDrumCard.trackId,
    answer: talkingDrumCard.answer,
  });
  return reordered;
}

function persistDeck() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
}

function setFormMessage(message, isError = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle("error", isError);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}