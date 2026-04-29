const STORAGE_KEY = "songcards-deck";
const talkingDrumCard = {
  trackId: "5SQCSiFsP7bIREv5h3y5Bp",
  answer: `10-1: Talking Drum
Talking drum (atumpan) mimics speech
Copies pitch, rhythm, and tone of language
Works because of tonal languages (like Twi)
Same word = different meaning depending on the pitch
Used to communicate proverbs, messages, and history
Connected to Akan culture (Ghana)
Matrilineal Society
Leadership through Nana (Chiefs)`,
};

const requiredDeck = [
  talkingDrumCard,
  {
    trackId: "external-nhemamusasa-bira",
    embedUrl:
      "https://canvas.pitt.edu/media_attachments_iframe/22994524",
    answer: `Nhemamusasa (Bira Ceremony)
Uses mbira (thumb piano)
Key features:
Cyclical patterns
Layered ostinatos
Interlocking parts
Buzzing timbre
Purpose:
Spiritual communication with ancestors
Music creates trance like state`,
  },
  {
    trackId: "external-mabasa-work",
    embedUrl:
      "https://canvas.pitt.edu/media_attachments_iframe/22994526",
    answer: `Mabasa (work)
Chimurenga Music
Zimbabwean political resistance music
Combines
Mbira style
Modern instruments (electric guitar, etc.)
Key features:
Cyclical interlocking patterns
Layered texture
Lyrics tied to labor, struggle, identity
Cultural meaning
Anti-colonial struggle
Music as political voice`,
  },
  {
    trackId: "4EjEy3NkbF5Iur6hJE4rb4",
    answer: `PL 8-29: Rag Sindhi Bhairavi - Rag Sindhi Bhairavi
Main ideas:
Example of Hindustani classical raga performance
Played by Ravi Shankar (sitar)
Structure (VERY IMPORTANT):
Alap - slow, free rhythm (no beat)
Jor - pulse begins
Gat - tabla enters, rhythm cycle (tal)
Jhala - fast, energetic ending
Musical features:
Based on a raga (melodic framework)
Improvisation within rules
Includes drone (tambura)
Concepts:
Hierarchy:
Soloist (main)
Tabla (accompanist)
Instruments imitate human voice`,
  },
  {
    trackId: "7qT0hOlhpuOpV5l1oqez5S",
    answer: `PL 7-22: Wira Ghorava Cakti '95 - Wira Ghorava Cakti '95
Main ideas:
Kreasi beleganjur (modern style)
Used in competitions
Features:
Virtuosity + showmanship
Complex textures
Includes choreographed movement (gerak)`,
  },
  {
    trackId: "7kANhYQOw5FkFsFpYSQiNk",
    answer: `PL 7-17: Cremation Procession - Cremation Procession
Main ideas:
Beleganjur gamelan (marching ensemble)
Used in cremation (Ngaben)
Purpose:
Guide the soul
Protect from evil spirits
Musical features:
Loud, energetic
Percussion-heavy
Played while moving`,
  },
  {
    trackId: "30pGoDDLP6hsMeXTEhiHha",
    answer: `PL 7-16: Forest Scene - Forest Scene
Main ideas:
Vocal ensemble (no instruments)
Based on Ramayana story
Musical features:
Interlocking rhythms (kilitan telu)
Repeated vocal sounds ("chak")
Dense rhythmic layering
Context:
From trance rituals
Adapted for tourist performances`,
  },
  {
    trackId: "5qufU1cd9LUwPZivL3UInx",
    answer: `PL 7-3: Ujung Laut - Ujung Laut
Main ideas:
Sekar Agung (large/complex piece)
Means "edge of the sea"
Musical features:
Irregular gong cycles
Long phrases (64, 80, 120 beats)
Texture:
Heterophony
Same melody, different variations
Extra meaning:
Melody mimics waves crashing`,
  },
  {
    trackId: "2RRJWNaRYOPJGpghjzHzZF",
    answer: `PL 7-2: Tjatrik - Tjatrik
Main ideas:
Sundanese degung gamelan (West Java)
Type: Sekar Alit (small/simple piece)
Musical features:
Cyclic form
16-beat cycle
Built on:
Patokan (core melody / goal tones)
Gong marks end of cycle
Texture:
Stratified polyphony
Low instruments = slow
High instruments = fast`,
  },
  {
    trackId: "6hpUSsbA2USGIIqO6788Vn",
    answer: `Rolling River: Country Dance - Rolling River: Country Dance
Main ideas:
Example of Black string band tradition
Instruments:
Banjo, fiddle, guitar
Musical features:
Polyphony (multiple melodic lines at once)
Strong steady beat ("four-on-the-floor")
Dance-oriented music
Important context:
String bands often seen as "white music," but:
Black musicians were foundational to country music
Many Black artists were ignored by recording industry`,
  },
  {
    trackId: "3Y1faJBjtzDOQVL6cR5Kie",
    answer: `My Soul Is a Witness to the Lord - My Soul Is a Witness to the Lord
Main ideas:
Early example of gospel / religious music recordings
Comes from Pentecostal church tradition
Highly emotional + participatory worship
Musical features:
Call and response
Percussive piano style
Influenced by ragtime + barrelhouse
Strong rhythmic bass lines
Important context:
First to use piano in gospel recordings
Shows syncretism (mixing sacred + popular styles)`,
  },
  {
    trackId: "02rxBKrDwXjZLPBubUTs5X",
    answer: `Red River Blues - Red River Blues
Main ideas:
Classic Blues
Example of a songster tradition
Traveling musician who knows many styles (not just blues)
Uses unusual instrument:
Quills (panpipes)
Guitar shows influence of European harmony
Key concepts:
Songsters != just blues musicians
They play ragtime, folk, gospel, popular songs
Recording industry often forced artists into "blues" category`,
  },
  {
    trackId: "0vWINKVhHM7XuUq8kV8pAU",
    answer: `Memphis Blues - Memphis Blues
Main ideas:
Early written blues by W.C. Handy
Connected to minstrelsy + early popular music industry
Important context:
Minstrelsy
Racist performance tradition (blackface)
But also one of the only ways Black music spread commercially
Key takeaway:
Shows tension between:
Opportunity (getting music heard)
Exploitation (racist system)`,
  },
  {
    trackId: "5j6tQBJnNG4wLLdVISJ5g2",
    answer: `11-26: Crazy Blues - Crazy Blues
Main ideas:
Example of Classic Blues
Mix of:
Blues + jazz + vaudeville
One of the first commercially successful blues recordings
Features:
Strong vocal expression
Backed by band (not solo)
More polished / performance-oriented
Cultural importance:
Helped bring Black music into the record industry`,
  },
  {
    trackId: "1WeX8wcU8FDEZxWurJLU0r",
    answer: `11-25: Three O'Clock Blues - Three O'Clock Blues
Main ideas:
Example of Urban (Electric) Blues
Features:
Electric guitar + band
More structured than rural blues
B.B. King style:
Expressive guitar = like a voice
Use of bends, vibrato, phrasing
Musical concepts:
Improvisation
Call-and-response (voice <-> guitar)`,
  },
  {
    trackId: "5JXbXc3Q4zWTTuix8zC6Ep",
    answer: `11-24: De Kalb Blues - De Kalb Blues
Main ideas:
Example of Rural (Country) Blues
Features:
Solo voice + acoustic guitar
Flexible rhythm (not strict timing)
Personal storytelling
Cultural role:
Music as everyday life expression
Work, struggle, personal experience
Connected to oral tradition`,
  },
  {
    trackId: "5Oc0vLGWdEWeCqIU8zyELt",
    answer: `11-5: Hound Dog
Main ideas:
Example of blues-based Black vocal style
Strong focus on sound quality (tone)
Rough, powerful, expressive (not "clean" like classical singing)
Heavy emotional delivery -> "soulfulness"
Shows gender + identity expression (strong female voice)
Important concept:
Cultural appropriation
Elvis Presley version became more famous
Black artists often created styles, but white artists got more recognition`,
  },
  {
    trackId: "6CTAvyjTnCshiJmgGOV8ec",
    answer: `10-43: Atlanta Kaira
Example of cross-cultural collaboration
West African jeli music + American Blues
Syncretism / hybridity
Mixing musical traditions
Layered ostinatos
Sataro singing
Improvisation
Saute mode
Similar to Lydian scale (raised 4th)
Instruments: Kora, bala, koni, guitar, vocals
Cultural meaning:
Kaira: linked to malian independence
Shows globalization of African music`,
  },
  {
    trackId: "2hMW5pEMLpQGBBgP042JpQ",
    answer: `10-28: Dounuya
Performed by a jeli (griot)
Historian, storyteller, praise singer
Uses the kora (22 string harp)
Praise song
Honors people, ideas, or even the world
Kumbengo
Repeating ostinato patterns (foundation)
Birimintingo
Fast, flashy improvised runs
Sataro
Emotional, expressive vocal style`,
  },
  {
    trackId: "5muOIQP1fUuzY0DMhKYDPJ",
    answer: `10-9: Fontomfrom
Royal drum ensemble of the Akan people
Played for chiefs, ceremonies, power display
Instruments:
Dawuro - bell
From - leader drum
Other supporting drums
Key musical features:
Layered Ostinatos
Timeline pattern (bell keeps everything together)
Polyvocality
Multiple "voices" interacting like conversation
Call and response / conversational feel
Constant variation (texture changes over time)`,
  },
];

const defaultDeck = [...requiredDeck];

const counter = document.getElementById("counter");
const cardShell = document.getElementById("cardShell");
const flashcard = document.getElementById("flashcard");
const prevBtn = document.getElementById("prevBtn");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetDeckBtn = document.getElementById("resetDeck");

let deck = ensureRequiredCards(loadDeck());
let currentIndex = 0;
let isFlipped = false;

persistDeck();
renderCard();

flipBtn.addEventListener("click", () => {
  if (!deck.length) {
    return;
  }
  isFlipped = !isFlipped;
  flashcard.classList.toggle("show-back", isFlipped);
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
});

function renderCard() {
  flashcard.classList.remove("show-back");
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
  const isExternalEmbed =
    typeof card.embedUrl === "string" && card.embedUrl.trim().length > 0;
  const embedSrc = isExternalEmbed
    ? card.embedUrl.trim()
    : `https://open.spotify.com/embed/track/${card.trackId}?utm_source=generator`;
  const privacyMaskHtml = isExternalEmbed
    ? ""
    : '<div class="spotify-art-mask" aria-hidden="true"></div><div class="spotify-mask" aria-hidden="true"></div>';

  flashcard.innerHTML = `
    <div class="face front">
      <div class="spotify-frame-wrap" aria-label="Spotify player">
        <iframe
          src="${embedSrc}"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        ${privacyMaskHtml}
      </div>
    </div>
    <div class="face back">
      <p>${formatAnswerForDisplay(card.answer)}</p>
    </div>
  `;

  counter.textContent = `${currentIndex + 1} / ${deck.length}`;
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

function ensureRequiredCards(cards) {
  if (!Array.isArray(cards)) {
    return [...defaultDeck];
  }

  const validCards = cards.filter(
    (card) =>
      card && typeof card.trackId === "string" && typeof card.answer === "string"
  );

  const existingByTrackId = new Map(
    validCards.map((card) => [card.trackId, card])
  );

  const seededRequiredCards = requiredDeck.map((requiredCard) => {
    const existing = existingByTrackId.get(requiredCard.trackId);
    if (!existing) {
      return requiredCard;
    }

    // Keep required cards up to date with canonical prompt text.
    return {
      ...existing,
      trackId: requiredCard.trackId,
      answer: requiredCard.answer,
    };
  });

  const requiredTrackIds = new Set(requiredDeck.map((card) => card.trackId));
  const customCards = validCards.filter(
    (card) => !requiredTrackIds.has(card.trackId)
  );

  return [...seededRequiredCards, ...customCards];
}

function persistDeck() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
}

function formatAnswerForDisplay(answer) {
  const lines = String(answer).split("\n");
  if (lines.length <= 1) {
    return escapeHtml(answer);
  }

  const formatted = lines.map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return "";
    }

    // Keep title/track line and section headers plain.
    if (index === 0 || trimmed.endsWith(":")) {
      return escapeHtml(trimmed);
    }

    // Preserve existing bullets if already present.
    if (/^[-*•]\s+/.test(trimmed)) {
      return escapeHtml(trimmed.replace(/^[-*]\s+/, "• "));
    }

    return `• ${escapeHtml(trimmed)}`;
  });

  return formatted.join("\n");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}