var previousUkVisaGrantedCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@no')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [previousUkVisaGrantedCommands],			
	elements: {
		body: 'body',
		no: {
			selector: 'input[id=yesNo_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};