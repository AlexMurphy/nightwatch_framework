var telephoneDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@phoneNumber', '07751719872')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [telephoneDetailsCommands],
	elements: {
		body: 'body',
		phoneNumber: {
			selector: 'input[id=number]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};