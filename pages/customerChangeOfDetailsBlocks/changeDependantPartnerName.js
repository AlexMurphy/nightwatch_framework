var changeDependantPartnerNameCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.click('select[id="titleRef"] option[value="Mr"]')
			.setValue('@givenName', 'TEST')
			.setValue('@familyName', 'Partner')
			.click('@saveAndContinue');
			// .click('@anotherNameFalse')
			// .click('@saveAndContinue');
  },
};

module.exports = {
  commands: [changeDependantPartnerNameCommands],
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