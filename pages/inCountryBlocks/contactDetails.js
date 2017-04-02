var residentialDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.setValue('@phoneNumber', '07771719872')
			.setValue('@homeAddressLine1', '2 Marsham Street')
			.setValue('@homeAddressTownCity', 'Westminster')
			.setValue('@homeAddressPostCode', 'SW1P 4DF')
			// .setValue('@homeAddressCountry', 'United Kingdom of Great Britain and Northern Ireland')
			.click('@body')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [residentialDetailsCommands],
	elements: {
		body: 'body',
		phoneNumber: {
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
		homeAddressCountry: {
			selector: 'input[id=homeAddress_countryRef_ui]'
		},
		differentAddress: {
			selector: 'input[id=differentAddress]'
		},
    saveAndContinue: {
      selector: 'input[id=submit]'
    },
	},
};