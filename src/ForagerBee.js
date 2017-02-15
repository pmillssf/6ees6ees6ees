class ForagerBee extends Bee {
  // TODO..
  constructor(age, color, job, canFly) {
  	super(age, color, job)
  	this.canFly = canFly
  	this.treasureChest = []
  }
  forage() {
    this.treasureChest.push('treasure')
  }
};
