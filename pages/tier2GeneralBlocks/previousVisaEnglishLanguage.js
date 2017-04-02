var previousVisaEnglishLanguageCommands = {
  submitProved: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@previousVisaProvedEnglish')
    	.assert.elementPresent('@previousVisaDidNotProveEnglish')
			.click('@previousVisaProvedEnglish')
			.click('@saveAndContinue')
  },
  submitNotProved: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@previousVisaProvedEnglish')
    	.assert.elementPresent('@previousVisaDidNotProveEnglish')
			.click('@previousVisaDidNotProveEnglish')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [previousVisaEnglishLanguageCommands],
	elements: {
		body: 'body',
		previousVisaProvedEnglish: {
			selector: 'input[id=previouslyProved_true]'
		},
		previousVisaDidNotProveEnglish: {
			selector: 'input[id=previouslyProved_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};