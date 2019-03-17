class Weapon {
  constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
  }

  takeDamage(damage) {
      this.durability -= damage;
      if (this.durability < 0) this.durability = 0;
  }

  checkDurability() {
      const thirtyPercent = 0.3;
      if (this.durability >= this.initDurability * thirtyPercent) return true;
      if ((this.durability < this.initDurability * thirtyPercent) && this.durability >= 0) return false;
  }

  getDamage() {
      if (this.checkDurability() === true) return this.attack;
      if (this.checkDurability() === false) return this.attack / 2;
      if (this.checkDurability() < 0) return 0;

  }

  isBroken() {
      if (this.durability === 0) {
          return true;
      }
      return false;
  }
}

class Arm extends Weapon {
  constructor() {
      super('Рука', 1, Infinity, 1);
      this.initDurability = Infinity;
  }
}

class Bow extends Weapon {
  constructor() {
      super('Лук', 10, 200, 3);
      this.initDurability = 200;
  }
}

class Sword extends Weapon {
  constructor() {
      super('Меч', 25, 500, 1);
      this.initDurability = 500;
  }
}

class Knife extends Weapon {
  constructor() {
      super('Нож', 5, 300, 1);
      this.initDurability = 300;
  }
}

class Staff extends Weapon {
  constructor() {
      super('Посох', 8, 300, 2);
      this.initDurability = 300;
  }
}

class LongBow extends Bow {
  constructor() {
      super();
      this.name = 'Длинный лук';
      this.attack = 15;
      this.durability = 200;
      this.range = 4;
      this.initDurability = 200;
  }
}

class Axe extends Sword {
  constructor() {
      super();
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
      this.range = 1;
      this.initDurability = 800;
  }
}

class StormStuff extends Staff {
  constructor() {
      super();
      this.name = 'Посох Бури';
      this.attack = 10;
      this.durability = 300;
      this.range = 3;
      this.initDurability = 300;
  }
}

class Player {
  constructor(name, position) {
      this.life = 100;
      this.magic = 20;
      this.speed = 1;
      this.attack = 10;
      this.agility = 5;
      this.luck = 10;
      this.description = 'Игрок';
      this.weapon = new Arm;
      this.name = name;
      this.position = position;
  }

  getLuck() {
      let randomNumber = Math.round(Math.random() * 100);
      return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
      if (distance <= this.weapon.range && distance !== 0) return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
      return 0;
  }

  takeDamage(damage) {
      if (this.life - damage >= 0) return this.life -= damage;
      return this.life = 0;
  }

  isDead() {
      return (this.life <= 0) ? true : false;

  }

}

class Warrior extends Player {
  constructor(name, position) {
      super(name, position);
      this.life = 120;
      this.speed = 2;
      this.attack = 10;
      this.description = 'Воин';
      this.weapon = new Sword;
      this.initLife = 120;
  }

  takeDamage(damage) {
      if (this.life < (this.initLife / 2) && this.getLuck() > 0.8) {
          (this.magic > 0) ? this.magic -= damage: this.life -= damage;
      } else {
          this.life -= damage;
      }
  }
}

class Archer extends Player {
  constructor(name, position) {
      super(name, position);
      this.life = 80;
      this.magic = 35;
      this.attack = 5;
      this.agility = 10;
      this.description = 'Лучник';
      this.weapon = new Bow;
  }

  getDamage(distance) {
      return (this.attack + this.weapon.getDamage()) * this.getLuck() * distance / this.weapon.range;
  }
}

class Mage extends Player {
  constructor(name, position) {
      super(name, position);
      this.life = 70;
      this.magic = 100;
      this.attack = 5;
      this.agility = 8;
      this.description = 'Маг';
      this.weapon = new Staff;
      this.initMagic = 100;
  }

  takeDamage(damage) {
      if (this.magic > this.initMagic / 2) {
          this.life = Math.round(this.life - (damage / 1.5));
          this.magic -= 12;
      } else {
          this.life -= damage;
      }
      if (this.life <= 0) this.life = 0;
  }
}

class Dwarf extends Warrior {
  constructor(name, position) {
      super(name, position);
      this.life = 130;
      this.attack = 15;
      this.luck = 20;
      this.description = 'Гном';
      this.weapon = new Axe;
      this.quantityHitsOfEnemy = 0;
  }

  takeDamage(damage) {
      this.quantityHitsOfEnemy += 1;
      if (this.quantityHitsOfEnemy % 6 === 0 && this.getLuck() > 0.5 && this.quantityHitsOfEnemy !== 0) {
          this.life -= damage / 2;
          console.log('damage = ' + damage, this.quantityHitsOfEnemy);
      } else {
          this.life -= damage;
      }


  }


}

class Crossbowman extends Archer {
  constructor(name, position) {
      super(name, position);
      this.life = 85;
      this.attack = 8;
      this.agility = 20;
      this.luck = 15;
      this.description = 'Арбалетчик';
      this.weapon = new LongBow;
  }
}

class Demiurge extends Mage {
  constructor(name, position) {
      super(name, position);
      this.life = 80;
      this.magic = 120;
      this.attack = 6;
      this.luck = 12;
      this.description = 'Демиург';
      this.weapon = new StormStuff;
  }

  getDamage() {
      let damage = this.weapon.getDamage();
      if (this.magic > 0 && this.getLuck() > 0.6) {
          damage = this.weapon.getDamage() * 1.5;
      }
      return damage;
  }
}


var mage = new Mage('Иван', 18);
console.log(mage.life, mage.magic);
mage.takeDamage(50);
console.log(mage.life, mage.magic);
mage.takeDamage(20);
console.log(mage.life, mage.magic);
mage.takeDamage(5);
console.log(mage.life, mage.magic);

var warrior = new Warrior('Вася', 22);
console.log(warrior.life, warrior.magic);
warrior.takeDamage(50);
console.log(warrior.life, warrior.magic);
warrior.takeDamage(20);
console.log(warrior.life, warrior.magic);
warrior.takeDamage(5);
console.log(warrior.life, warrior.magic);

