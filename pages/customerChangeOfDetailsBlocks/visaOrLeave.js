var visaOrLeaveCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@tier1')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [visaOrLeaveCommands],		
	elements: {
		body: 'body',
		tier1 : {
			selector: 'input[id=applyingAsLeaveTypeRef_tier1]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};