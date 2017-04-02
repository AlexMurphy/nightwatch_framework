var terroristViewsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noTerroristViews')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [terroristViewsCommands],	
	elements: {
		body: 'body',
		noTerroristViews: {
			selector: 'input[id=hasExpressed_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};