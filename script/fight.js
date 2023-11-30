import { drawArena } from "./arena.js";
import { Player } from "./player.js";
import { createElement } from "./system.js";

const p1 = Player.create({
  name: "Ivan",
  stats: { maxHp: 200, currentHp: 50, str: 10 },
  image: "/images/players/did.jpg",
});
const p2 = Player.create({
  name: "Ivan",
  stats: { maxHp: 100, currentHp: 60, str: 23 },
  image: "/images/players/baba.jpg",
});
let round = 1
const game = createElement("div", "game-container");
const ui = createElement("div", "ui-container");
document.body.append(game, ui);
p2.addSkill()
const atackBtn = createElement("button");
atackBtn.textContent = "atack";
atackBtn.onclick = () => {
  p2.skills[0].skill(p1);
  round++
};
ui.append(atackBtn);

function drawField() {
  const arena = drawArena(round);
  game.innerHTML = "";
  game.append(arena.arena);
  const player = drawPlayer(p1);
  arena.playerWrapper.append(player);
  const enemy = drawPlayer(p2);
  arena.enemyWrapper.append(enemy);
  requestAnimationFrame(drawField);
}

function drawPlayer(character) {
  const player = createElement("div", "player");
  player.style.backgroundImage = `url(${character.image})`;
  player.style.width = `${character.width}px`;
  player.style.height = `${character.height}px`;
  const hpBar = createElement("div", "hp-bar");
  player.append(hpBar);
  hpBar.style.height = `${
    100 - (character.stats.currentHp / character.stats.maxHp) * 100
  }%`;
  return player;
}


export {drawField}