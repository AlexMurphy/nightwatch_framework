var hasChildrenInTheUKCommands = {
  submitChildrenInTheUK: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@hasChildrenInTheUK')
      .assert.elementPresent('@hasNoChildrenInTheUK')
      .click('@hasChildrenInTheUK')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [hasChildrenInTheUKCommands],	
	elements: {
		body: 'body',
		hasChildrenInTheUK: {
        	selector: 'input[id=value_true]'
        },
    hasNoChildrenInTheUK: {
          selector: 'input[id=value_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};