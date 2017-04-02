var contactEmailCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@email', "alexander.murphy@homeoffice.gsi.gov.uk")
      .setValue('@password1', "Password1!")
      .setValue('@password2', "Password1!")
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [contactEmailCommands],	
	elements: {
		body: 'body',
		email: {
        	selector: 'input[id=email]'
        },
		password1: {
        	selector: 'input[id=password1]'
    	},
    	password2: {
    		selector: 'input[id=password2]'
    	},
        saveAndContinue: {
            selector: 'input[id=submit]'
        },
	},
};