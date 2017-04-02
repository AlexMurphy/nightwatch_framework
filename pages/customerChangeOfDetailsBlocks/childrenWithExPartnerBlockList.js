var childrenWithExPartnerBlockListCommands = {
  submitNoOtherChildren: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@otherChildren')
      .assert.elementPresent('@noOtherChildren')
      .click('@noOtherChildren')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [childrenWithExPartnerBlockListCommands],	
	elements: {
		body: 'body',
		otherChildren: {
        	selector: 'input[id=addAnother_true]'
        },
    noOtherChildren: {
          selector: 'input[id=addAnother_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};