export function plantIllustration(name) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="400" viewBox="0 0 420 400"><rect width="420" height="400" fill="#e8eee2"/><path d="M165 275h90l-14 77h-62z" fill="#c88f6b"/><path d="M210 280V112" stroke="#456b4b" stroke-width="7"/><path d="M208 235C105 232 104 133 208 187M212 191C308 186 302 99 212 146M209 151C151 130 162 65 211 105" fill="#668763"/><text x="210" y="378" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#405540">Plant illustration</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace('Plant illustration', name.replace(/[<>&"']/g, '') + ' illustration'));
}
export default function PlantImage({ plant }) {
  return <img src={plant.image} alt={plant.name} onError={event => {
    const image = event.currentTarget;
    if (!image.dataset.fallback) { image.dataset.fallback = 'true'; image.src = plantIllustration(plant.name); image.alt = plant.name + ' illustration'; }
  }} />;
}
