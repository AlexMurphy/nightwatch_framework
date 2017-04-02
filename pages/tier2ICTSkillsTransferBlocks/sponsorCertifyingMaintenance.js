var sponsorCertifyingMaintenanceCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@certifyNo')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [sponsorCertifyingMaintenanceCommands],
	elements: {
		body: 'body',
		certifyYes: {
			selector: 'input[id=value_yes]'
		},
		certifyNo: {
			selector: 'input[id=value_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};