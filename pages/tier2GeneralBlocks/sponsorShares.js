var sponsorSharesCommands = {
  submitNotLimited: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@notALimitedCompany')
    	.assert.elementPresent('@noSharesOwned')
			.click('@notALimitedCompany')
			.click('@saveAndContinue')
  },
  submitNoShares: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@notALimitedCompany')
    	.assert.elementPresent('@noSharesOwned')
			.click('@noSharesOwned')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [sponsorSharesCommands],
	elements: {
		body: 'body',
		notALimitedCompany: {
			selector: 'input[id=sharesOwned_notLimitedCompany]'
		},
		noSharesOwned: {
			selector: 'input[id=sharesOwned_noShares]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};