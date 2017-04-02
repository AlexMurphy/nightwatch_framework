var sponsorEmploymentLengthCommands = {
  submitLessThanThree: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@lessThanThree')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [sponsorEmploymentLengthCommands],
	elements: {
		body: 'body',
		lessThanThree: {
			selector: 'input[id=employmentLength_lte3]'
		},
    moreThanThree: {
        selector: 'input[id=employmentLength_gt3]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};