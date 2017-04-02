var employmentHistoryCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noEmploymentHistory')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [employmentHistoryCommands],	
	elements: {
		body: 'body',
		noEmploymentHistory: {
			selector: 'input[id=hasNoEmploymentHistory]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};