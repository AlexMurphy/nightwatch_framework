var sponsorEmploymentCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@jobTitle', 'King Ov Test')
      .setValue('@annualSalary', '100000')
      .click('@receiveAllowancesNo')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [sponsorEmploymentCommands],
	elements: {
		body: 'body',
		jobTitle: {
			selector: 'input[id=jobTitle]'
		},
		annualSalary: {
			selector: 'input[id=annualSalary]'
		},
		receiveAllowancesYes: {
			selector: 'input[id=receiveAllowances_true]'
		},
		receiveAllowancesNo: {
			selector: 'input[id=receiveAllowances_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};