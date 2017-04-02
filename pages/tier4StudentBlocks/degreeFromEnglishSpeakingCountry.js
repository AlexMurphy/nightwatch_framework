var degreeFromEnglishSpeakingCountryCommands = {
  submitHasDegree_Transcript: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@hasDegree')
    	.assert.elementPresent('@doesNotHaveDegree')
    	.click('@hasDegree')
    	.setValue('@countryStudiedIn', 'Ireland')
    	.click('@body')
    	.assert.elementPresent('@certificate')
    	.assert.elementPresent('@transcript')
			.click('@transcript')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [degreeFromEnglishSpeakingCountryCommands],
	elements: {
		body: 'body',
		hasDegree	: {
			selector: 'input[id=englishDegreeInEnglishSpeakingCountry_true]'
		},
		doesNotHaveDegree	: {
			selector: 'input[id=englishDegreeInEnglishSpeakingCountry_false]'
		},
		countryStudiedIn: {
			selector: 'input[id=country_ui]'
		},
		certificate	: {
			selector: 'input[id=universityEvidenceKindRef_certificate]'
		},
		transcript	: {
			selector: 'input[id=universityEvidenceKindRef_transcript]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};