var brpCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@noINeverHad')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [brpCommands],
	elements: {
		body: 'body',
		yesIhave: {
			selector: 'input[id=hasBrp_yes]'
		},
		noIhad: {
			selector: 'input[id=hasBrp_noNotNow]'
		},
		noINeverHad	: {
			selector: 'input[id=hasBrp_noNever]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};