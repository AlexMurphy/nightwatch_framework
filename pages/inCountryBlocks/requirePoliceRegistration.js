var requirePoliceRegistrationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@registrationNo')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [requirePoliceRegistrationCommands],
	elements: {
		body: 'body',
		registrationYes: {
			selector: 'input[id=requiresRegistration_true]'
		},
		registrationNo: {
			selector: 'input[id=requiresRegistration_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};