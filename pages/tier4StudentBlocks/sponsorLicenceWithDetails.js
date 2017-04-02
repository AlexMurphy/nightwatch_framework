var sponsorLicenceWithDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.assert.containsText('#editInformation', "Revocation, cancellation or curtailment")
			.assert.elementPresent('@hasBeenCurtailed')
			.assert.elementPresent('@neverCurtailed')
			.click('@neverCurtailed')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [sponsorLicenceWithDetailsCommands],
	elements: {
		body: 'body',
		licenceNumber: {
			selector: 'input[id=phone]'
		},
		homeAddressLine1: {
			selector: 'input[id=homeAddress_line1]'
		},
		homeAddressLine2: {
			selector: 'input[id=homeAddress_line2]'
		},
		homeAddressLine3: {
			selector: 'input[id=homeAddress_line3]'
		},
		homeAddressTownCity: {
			selector: 'input[id=homeAddress_townCity]'
		},
		homeAddressPostCode: {
			selector: 'input[id=homeAddress_postCode]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};