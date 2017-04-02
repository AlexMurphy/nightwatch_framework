var identityNameListCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@givenName', 'TEST')
			.setValue('@familyName', 'TEST')
			.click('@saveAndContinue')
			.click('@anotherNameFalse')
			.click('@saveAndContinue')
  },
  submitMultipleNames: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@givenName', 'TEST')
			.setValue('@familyName', 'TEST')
			.click('@saveAndContinue')
			.click('@anotherNameTrue')
			.click('@saveAndContinue')
			.setValue('@givenName', 'TEST2')
			.setValue('@familyName', 'TEST2')
			.click('@saveAndContinue')
			.click('@anotherNameTrue')
			.click('@saveAndContinue')
			.setValue('@givenName', 'TEST3')
			.setValue('@familyName', 'TEST3')
			.click('@saveAndContinue')
			.click('@anotherNameFalse')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [identityNameListCommands],
	elements: {
		body: 'body',
		title: {
			selector: 'select[id=titleRef]'
		},
		givenName: {
			selector: 'input[id=givenName]'
		},
		familyName: {
			selector: 'input[id=familyName]'
		},
		anotherNameTrue: {
			selector: 'input[id=addAnother_true]'
		},
		anotherNameFalse: {
			selector: 'input[id=addAnother_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};