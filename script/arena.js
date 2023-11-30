import { createElement } from "./system.js";

const width = 600;
const height = 400;

function drawArena(round=1) {
  const roundContainer = createElement('div' , 'round') 
  roundContainer.textContent = round
  const arena = createElement("div", "arena-wrapper");
  const arenaImage = createElement("div", "arena");
  const playerWrapper = createElement("div", "player-wrapper");
  const enemyWrapper = createElement("div", "enemy-wrapper");
  arenaImage.style.width = `${width}px`;
  arenaImage.style.height = `${height}px`;
  arenaImage.style.backgroundImage = `url(images/arenas/a1.webp)`;
  arenaImage.append(roundContainer)
  arena.append(playerWrapper, arenaImage, enemyWrapper);
  return { arenaImage, playerWrapper, enemyWrapper, arena};
}

export { drawArena };
