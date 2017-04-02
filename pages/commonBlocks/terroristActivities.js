var terroristActivitiesCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noTerroristActivities')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [terroristActivitiesCommands],	
	elements: {
		body: 'body',
		noTerroristActivities: {
			selector: 'input[id=hasBeenInvolved_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};