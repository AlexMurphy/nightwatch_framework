var sponsorLicenceCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@sponsorLicenceNumber', '4RMQMMV0x')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [sponsorLicenceCommands],
	elements: {
		body: 'body',
		sponsorLicenceNumber: {
			selector: 'input[id=sponsorLicenceNumber]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};