var requestedDurationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@twoYears')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [requestedDurationCommands],	
	elements: {
		body: 'body',
		twoYears: {
			selector: 'input[id=period_2y]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};