var appointmentCentreSelectionCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@shanghai')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [appointmentCentreSelectionCommands],				
	elements: {
		body: 'body',
		shanghai: {
			selector: '/html/body/main/section/section/div[1]/form/div/div/fieldset/div/div[9]/label/input',
      locateStrategy: 'xpath'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};