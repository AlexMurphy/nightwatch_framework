var publicFundsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@receivedFundsNo')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [publicFundsCommands],
	elements: {
		body: 'body',
		receivedFundsYes: {
			selector: 'input[id=hasClaimed_true]'
		},
		receivedFundsNo: {
			selector: 'input[id=hasClaimed_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};