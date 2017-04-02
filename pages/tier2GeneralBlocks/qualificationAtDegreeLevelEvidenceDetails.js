var qualificationAtDegreeLevelEvidenceDetailsCommands = {
  submitdegreeCertificate: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@degreeCertificate')
    	.assert.elementPresent('@officialTranscriptOrLetter')
			.click('@degreeCertificate')
			.click('@saveAndContinue')
  },
  submitofficialTranscriptOrLetter: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@degreeCertificate')
    	.assert.elementPresent('@officialTranscriptOrLetter')
			.click('@officialTranscriptOrLetter')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [qualificationAtDegreeLevelEvidenceDetailsCommands],
	elements: {
		body: 'body',
		degreeCertificate: {
			selector: 'input[id=evidenceKindRef_certificate]'
		},
		officialTranscriptOrLetter: {
			selector: 'input[id=evidenceKindRef_transcriptOrLetter]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};