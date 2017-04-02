var terroristOrganisationsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noTerroristOrganisations')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [terroristOrganisationsCommands],	
	elements: {
		body: 'body',
		noTerroristOrganisations: {
			selector: 'input[id=hasBeenInvolved_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};