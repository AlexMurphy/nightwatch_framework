var emailAddressCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@email', "alexander.murphy@homeoffice.gsi.gov.uk")
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [emailAddressCommands],	
	elements: {
		body: 'body',
		email: {
        	selector: 'input[id=email]'
        },
        saveAndContinue: {
            selector: 'input[id=submit]'
        },
	},
};