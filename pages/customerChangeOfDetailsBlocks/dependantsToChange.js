var dependantsToChangeCommands = {
  submitPartner: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@partner')
      .assert.elementPresent('@child')
      .click('@partner')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [dependantsToChangeCommands],	
	elements: {
		body: 'body',
		partner: {
        	selector: 'input[id=changePartner]'
        },
    child: {
          selector: 'input[id=changeChildren]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};