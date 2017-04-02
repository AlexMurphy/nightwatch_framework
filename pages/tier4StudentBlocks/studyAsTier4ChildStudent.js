var studyAsTier4ChildStudentCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.assert.containsText('#editInformation', "Study as a Tier 4 (Child) student")
			.assert.elementPresent('@yes')
			.assert.elementPresent('@no')
			.click('@no')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [studyAsTier4ChildStudentCommands],
	elements: {
		body: 'body',
		yes: {
			selector: 'input[id=value_true]'
		},
		no: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};