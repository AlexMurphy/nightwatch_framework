var englishDegreeCommands = {
  submitDegree: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@degreeInEnglish')
    	.assert.elementPresent('@noDegreeInEnglish')
			.click('@degreeInEnglish')
			.click('@saveAndContinue')
  },
  submitNoDegree: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@degreeInEnglish')
    	.assert.elementPresent('@noDegreeInEnglish')
			.click('@noDegreeInEnglish')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [englishDegreeCommands],
	elements: {
		body: 'body',
		degreeInEnglish: {
			selector: 'input[id=hasDegree_true]'
		},
		noDegreeInEnglish: {
			selector: 'input[id=hasDegree_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};