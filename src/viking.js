// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <=  0) {
            return (`${this.name} has died in act of combat`);

        
        }
        else {
            return (`${this.name} has received ${damage} points of damage`)
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
}
}
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //make saxon recieve damage
    //equal to strength of viking
    //if saxon === 0, remove saxon from saxon army
    //return
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //console.log(randomSaxon);
    //console.log(randomViking);
    // if random vikings health is higher than saxon, take viking damage===strength - health

    const result = randomSaxon.receiveDamage(randomViking.strength);

    this.saxonArmy.forEach(randomSaxon => {
      if (randomSaxon.health <= 0) {
        this.saxonArmy.pop();
      }
      return
    });

  }

  saxonAttack() {
    //make saxon recieve damage
    //equal to strength of viking
    //if saxon === 0, remove saxon from saxon army
    //return
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //console.log(randomSaxon);
    //console.log(randomViking);
    // if random vikings health is higher than saxon, take viking damage===strength - health

    const result = randomViking.receiveDamage(randomSaxon.strength);

    this.vikingArmy.forEach(randomViking => {
      if (randomViking.health <= 0) {
        this.vikingArmy.pop();
      }
      return
    });

  }

  showStatus() {

    if (this.saxonArmy.length === 0)
        return ('Vikings have won the war of the century!')
    if (this.vikingArmy.length === 0)
    return ('Saxons have fought for their lives and survived another day...')
    else {
        return ('Vikings and Saxons are still in the thick of battle.')
    }
  }
  
}
const war = new War()

let ragnar = new Viking('Ragnar', 45, 10)
let rollo = new Viking('Rollo', 45,10)


let jorge = new Saxon(20, 10)
let rolle = new Saxon(20,10)


war.addViking(ragnar)
war.addViking(rollo)
war.addViking(ragnar)

war.addSaxon(jorge)
war.addSaxon(rolle)
war.addSaxon(rolle)



war.vikingAttack()



