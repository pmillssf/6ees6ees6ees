class ForagerBee extends Bee {
  // TODO..
  constructor(age, color, job) {
  	super(age, color, job)
  	this.canFly = true
  	this.treasureChest = []
  }
  forage() {
    this.treasureChest.push('treasure')
  }
};
