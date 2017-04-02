var accommodationPlansCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@none')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [accommodationPlansCommands],			
	elements: {
		body: 'body',
		none: {
			selector: 'input[id=bandRef_0]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};