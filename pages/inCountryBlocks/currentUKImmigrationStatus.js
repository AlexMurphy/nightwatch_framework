var currentUKImmigrationStatusCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@visaNo')
			.click('@saveAndContinue')
			.assert.containsText('#errors', "Your application is unlikely to be successful if you do not currently hold a visa or permission to stay.")
			.click('@saveAndContinue')
  },
  submitStudent: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@visaYes')
			.setValue('#productName', 'Student')
			.click('@saveAndContinue');
  },
};

module.exports = {
  commands: [currentUKImmigrationStatusCommands],
	elements: {
		body: 'body',
		visaYes: {
			selector: 'input[id=hasPermitOrVisa_true]'
		},
		visaNo: {
			selector: 'input[id=hasPermitOrVisa_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};