var birthDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.waitForElementVisible('@temporaryVisa', 1000)
    	.waitForElementVisible('@permanentResident', 1000)
    	.waitForElementVisible('@noVisaNotResident', 1000)
    	.click('@permanentResident')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [birthDetailsCommands],
	elements: {
		body: 'body',
		temporaryVisa: {
			selector: 'input[id=immigrationStatusTypeRef_temporaryVisa]'
		},
		permanentResident: {
			selector: 'input[id=immigrationStatusTypeRef_permanentResident]'
		},
		noVisaNotResident: {
			selector: 'input[id=immigrationStatusTypeRef_other]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};