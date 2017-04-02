var sponsoredStudiesCommands = {
  submitSponsored: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@sponsored')
    	.assert.elementPresent('@notSponsored')
			.click('@sponsored')
			.click('@saveAndContinue')
  },
  submitNotSponsored: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@sponsored')
    	.assert.elementPresent('@notSponsored')
			.click('@notSponsored')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [sponsoredStudiesCommands],
	elements: {
		body: 'body',
		sponsored: {
			selector: 'input[id=value_true]'
		},
		notSponsored: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};