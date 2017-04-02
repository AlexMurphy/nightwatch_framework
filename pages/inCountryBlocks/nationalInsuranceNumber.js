var nationalInsuranceNumberCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@noNationalInsuranceNumber')
			.click('@saveAndContinue')
  },
  submitTier2General: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@noNationalInsuranceNumber')
			.click('@iAgree')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [nationalInsuranceNumberCommands],
	elements: {
		body: 'body',
		noNationalInsuranceNumber	: {
			selector: 'input[id=notAvailable]'
		},
		iAgree	: {
			selector: 'input[id=dwpAgreement]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};