var englishLanguageTestCertificateCommands = {
  submitPassedEnglishTest: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@passedEnglishTest')
    	.assert.elementPresent('@noEnglishTest')
			.click('@passedEnglishTest')
			.click('@saveAndContinue')
  },
  submitNoEnglishTest: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@passedEnglishTest')
    	.assert.elementPresent('@noEnglishTest')
			.click('@noEnglishTest')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [englishLanguageTestCertificateCommands],
	elements: {
		body: 'body',
		passedEnglishTest: {
			selector: 'input[id=hasCertificate_true]'
		},
		noEnglishTest: {
			selector: 'input[id=hasCertificate_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};