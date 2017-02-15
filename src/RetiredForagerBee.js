class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(age, color, job, canFly) {
  	super(age, color, job, canFly)
  }
  forage() {
  	return 'I am too old, let me play cards instead'
  }
  gamble() {
  	this.treasureChest.push('treasure')
  }
};
