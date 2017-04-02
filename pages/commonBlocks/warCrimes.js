var warCrimesCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noWarCrimes')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [warCrimesCommands],		
	elements: {
		body: 'body',
		noWarCrimes: {
			selector: 'input[id=hasBeenInvolved_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};