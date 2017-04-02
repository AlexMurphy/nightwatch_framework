var appointmentCentreSelectionCommands = {
  submitEEAOrCR: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@croydon')
			.assert.containsText('@content', "Choose a Premium Service Centre")
			.click('@croydon')
			.click('@saveAndContinue')
  },
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@belfast')
    	.assert.elementPresent('@birmingham')
    	.assert.elementPresent('@cardiff')
    	.assert.elementPresent('@croydon')
    	.assert.elementPresent('@glasgow')
    	.assert.elementPresent('@liverpool')
    	.assert.elementPresent('@sheffield')
    	.click('@croydon')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [appointmentCentreSelectionCommands],
	elements: {
		body: 'body',
		content: '#editInformation',
		belfast: {
			selector: 'input[id=centreId_PEBE]'
		},
		birmingham: {
			selector: 'input[id=centreId_PEBI]'
		},
		cardiff: {
			selector: 'input[id=centreId_PECA]'
		},
		croydon: {
			selector: 'input[id=centreId_PCCR]'
		},
		glasgow: {
			selector: 'input[id=centreId_PEGL]'
		},
		liverpool: {
			selector: 'input[id=centreId_PELI]'
		},
		sheffield: {
			selector: 'input[id=centreId_PESH]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};