var currentLeaveStudentDoctorDentistCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.assert.containsText('#editInformation', "Your most recent leave")
			.assert.elementPresent('@yes')
			.assert.elementPresent('@no')
			.click('@no')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [currentLeaveStudentDoctorDentistCommands],
	elements: {
		body: 'body',
		yes: {
			selector: 'input[id=value_true]'
		},
		no: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};