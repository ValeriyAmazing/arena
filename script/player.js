import { createElement } from "./system.js";

class Player {
  constructor(options) {
    const { name, stats, image } = options;
    this.name = name;
    this.stats = stats || {};
    this.image = image || "";
    this.width = 100;
    this.height = 240;
    this.skills = [];
  }
  static create(options) {
    return new Player(options);
  }
  static skills = [
    {
      skill: (target) => {
        atack(target);
      },
      name: "atack",
      cd: 0,
    },
  ];
  addSkill() {
    this.skills.push(Player.skills[0]);
  }
  atack(target) {
    target.stats.currentHp - this.stats.str > 0
      ? (target.stats.currentHp -= this.stats.str)
      : (target.stats.currentHp = 0);
  }
}

export { Player };
