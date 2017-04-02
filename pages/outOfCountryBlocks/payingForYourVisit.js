var payingForYourVisitCommands = {
  submitNo: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noonePayingTowardsCost')
			.click('@saveAndContinue')
  },
  submitYes: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@someonePayingTowardsCost')
			.click('@saveAndContinue')
  }
};


module.exports = {
  commands: [payingForYourVisitCommands],
	elements: {
		body: 'body',
		noonePayingTowardsCost: {
			selector: 'input[id=value_false]'
		},
		someonePayingTowardsCost: {
			selector: 'input[id=value_true]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};