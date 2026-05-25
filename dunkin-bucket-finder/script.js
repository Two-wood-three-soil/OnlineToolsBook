const form = document.querySelector("#finder-form");
const input = document.querySelector("#location-input");
const results = document.querySelector("#results");
const resultTitle = document.querySelector("#result-title");
const mapsLink = document.querySelector("#maps-link");
const recommendation = document.querySelector("#recommendation");
const callScript = document.querySelector("#call-script");
const copyButton = document.querySelector("#copy-script");
const statusLabel = document.querySelector("#status-label");
const statusNote = document.querySelector("#status-note");

const marketHints = [
  { pattern: /^(100|101|102|103|104|112|113|114|116)|new york|brooklyn|queens|bronx/i, market: "New York City", note: "Dense markets can sell through quickly. Call two stores before traveling." },
  { pattern: /^(021|022|023|024)|boston|cambridge|somerville/i, market: "Boston", note: "Greater Boston usually has many Dunkin options, so compare the closest three stores." },
  { pattern: /^(606|607)|chicago/i, market: "Chicago", note: "Ask whether the item is available at franchise locations or only select stores." },
  { pattern: /^(331|332|333|334)|miami|fort lauderdale/i, market: "South Florida", note: "Availability can vary by mall, airport, and standalone locations." },
  { pattern: /^(191|190)|philadelphia|philly/i, market: "Philadelphia", note: "Try morning calls first because limited items may sell out by afternoon." },
  { pattern: /^(900|901|902|913|914|915)|los angeles|la /i, market: "Los Angeles", note: "Use the map search because Dunkin density varies heavily by neighborhood." }
];

function normalizeLocation(value) {
  return value.trim().replace(/\s+/g, " ");
}

function getMarket(value) {
  return marketHints.find((hint) => hint.pattern.test(value));
}

function buildMapsUrl(value) {
  const query = encodeURIComponent(`Dunkin near ${value}`);
  return `https://www.google.com/maps/search/${query}`;
}

function buildCallScript(value) {
  return `Hi, I am checking stores near ${value}. Do you currently have the Dunkin bucket in stock, is it available today, and is there a purchase limit?`;
}

function updateResults(value) {
  const location = normalizeLocation(value);
  const market = getMarket(location);
  const marketName = market ? market.market : location;
  const script = buildCallScript(location);

  resultTitle.textContent = `Dunkin bucket check near ${marketName}`;
  mapsLink.href = buildMapsUrl(location);
  recommendation.textContent = `Open the map search for Dunkin stores near ${location}, then call the closest three locations before visiting.`;
  callScript.textContent = script;
  statusLabel.textContent = "Call to confirm";
  statusNote.textContent = market ? market.note : "No live inventory is available here yet. Use the map link and call script for the fastest check.";

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = normalizeLocation(input.value);
  if (!value) return;
  updateResults(value);
});

copyButton.addEventListener("click", async () => {
  const text = callScript.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy call script";
    }, 1600);
  } catch {
    copyButton.textContent = "Select script above";
  }
});
