import { data, types } from './data'; // js

import SomeError from './errors'; // js

export default class Character {
  constructor(name, type) {
    this.level = 1;
    this.health = 100;
    if (
      typeof name === 'string'
      && name.length > 1
      && name.length < 11
    ) {
      this.name = name;
    } else {
      throw new SomeError(
        'not-a-string',
        'Name not a string or its length is out of the range 2-10',
      );
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new SomeError(
        'invalid-type',
        'Character`s type not valid',
      );
    }

    this.attack = data[this.type].attack;
    this.defence = data[this.type].defence;
  }

  damage(points) {
    const worsening = points * (1 - this.defence / 100);
    if (worsening > this.health) {
      this.health = 0;
    } else {
      this.health -= worsening;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Number((this.attack * 1.2).toFixed(0));
      this.defence = Number((this.defence * 1.2).toFixed(0));
      this.health = 100;
      return this;
    }
    throw new SomeError('dead', 'Character died');
  }
}

console.log('******');
const ch1 = new Character('Python', 'Daemon');
console.log(ch1);
const a = ch1.levelUp();
console.log(a);
console.log('******');

// console.log('======');
// ch1.damage(7);
// console.log(ch1.health);
// ch1.damage(1200);
// console.log(ch1.health);
// ch1.levelUp();
// console.log(ch1);
// console.log('======');

// let d = new SomeError(
//   'not-a-string',
//   'Name not a string or its length is out of the range 2-10',
// );
// console.log(d);
