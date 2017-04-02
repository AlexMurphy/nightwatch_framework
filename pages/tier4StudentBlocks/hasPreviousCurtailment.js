var hasPreviousCurtailmentCommands = {
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
  commands: [hasPreviousCurtailmentCommands],
	elements: {
		body: 'body',
		hasBeenCurtailed: {
			selector: 'input[id=value_true]'
		},
		neverCurtailed: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};