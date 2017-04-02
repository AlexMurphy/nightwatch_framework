var immigrationApplicationCurrentlyInProgressCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@notInProgress')
			.click('@saveAndContinue')
  },
  submitInProgress: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@inProgress')
      .assert.elementPresent('@notInProgress')
      .click('@inProgress')
      .click('@saveAndContinue');
  },
};

module.exports = {
  commands: [immigrationApplicationCurrentlyInProgressCommands],
	elements: {
		body: 'body',
		inProgress: {
			selector: 'input[id=value_true]'
		},
		notInProgress: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};