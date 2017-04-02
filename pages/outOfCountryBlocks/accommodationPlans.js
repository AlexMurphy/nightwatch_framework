var accommodationPlansCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@accommodationsPlans', 'Live in a tree')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [accommodationPlansCommands],		
	elements: {
		body: 'body',
		accommodationsPlans: 'textarea[id="plans"]',
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};