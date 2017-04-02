var immigrationHealthSurchargeCommands = {
  submitImmigrationHealthSurcharge: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@goToIHSWebsite')
      .assert.elementPresent('@saveAndContinue')
      .click('@goToIHSWebsite');
  }
};

module.exports = {
    commands: [immigrationHealthSurchargeCommands],	
	elements: {
		body: 'body',
    goToIHSWebsite: {
          selector: 'input[id=pay-ihs]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};