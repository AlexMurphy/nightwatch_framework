var aboutYourAccommodationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@timeAtAddress', '10')
			.click('select[id="timeAtAddressUnit"] option[value="years"]')
			.click('@iOwnIt')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [aboutYourAccommodationCommands],
	elements: {
		body: 'body',
		timeAtAddress: {
			selector: 'input[id=timeAtAddress]'
		},
		iOwnIt: {
			selector: 'input[id=status_own]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};