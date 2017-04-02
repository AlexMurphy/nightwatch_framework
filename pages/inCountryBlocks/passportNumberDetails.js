var passportNumberDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.assert.containsText('#editInformation', "Your passport")
			.click('@validPassportYes')
			.setValue('@passportNumber', '1234567890')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [passportNumberDetailsCommands],
	elements: {
		body: 'body',
		validPassportYes: {
			selector: 'input[id=yesNo_true]'
		},
		validPassportNo: {
			selector: 'input[id=yesNo_false]'
		},
		passportNumber: {
			selector: 'input[id=passportNumber]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};