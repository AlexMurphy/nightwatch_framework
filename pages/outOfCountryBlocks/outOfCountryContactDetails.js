var outOfCountryContactDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.waitForElementVisible('@phoneNumberCode', 10000)
			.setValue('@phoneNumberCode', '44')
			.setValue('@phoneNumber', '7751719872')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [outOfCountryContactDetailsCommands],
	elements: {
		body: 'body',
		phoneNumberCode: {
			selector: 'input[id=phoneNumbers_0_code]'
		},
		phoneNumber: {
			selector: 'input[id=phoneNumbers_0_number]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};