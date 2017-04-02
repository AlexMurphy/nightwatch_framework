var feeCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@visa')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [feeCommands],
	elements: {
		body: 'body',
		visa: {
			selector: 'input[id=paymentCardType_VISA-SSL]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};