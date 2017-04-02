var appointmentCentreSelectionCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.click('@applyingForDisallowedNo')
			.click('@Tier1')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [appointmentCentreSelectionCommands],
	elements: {
		body: 'body',
		content: '#editInformation',
		applyingForDisallowedYes: {
			selector: 'input[id=areYouApplyingForADisallowedCategory_true]'
		},
    applyingForDisallowedNo: {
        selector: 'input[id=areYouApplyingForADisallowedCategory_false]'
    },
    Tier1: {
        selector: 'input[id=setOLeaveCategory_setOTier1General]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};