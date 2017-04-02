var applicationSummaryCommands = {
  submitPlanningTostay: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@planningTostay')
      .assert.elementPresent('@addYourVisaType')
      .click('@planningTostay')
  },
  submitAddYourVisaType: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('#VisaType')
      .setValue('#VisaType', "PBS")
      .click('#VisaType')
      // .click('select[id="VisaType"] option[value="PBS Dependant (Tier 1, 2 and 5)"]')
      .click('@saveAndContinue')
      .click('@theseDetailsAreCorrect')
  }
};

module.exports = {
    commands: [applicationSummaryCommands],	
	elements: {
		body: 'body',
    planningTostay: {
      selector: '//*[@id="content"]/div[2]/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    addYourVisaType: {
      selector: '//*[@id="content"]/div[2]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    saveAndContinue: {
      selector: '/html/body/div[5]/main/form/div[21]/input',
      locateStrategy: 'xpath'
    },
    theseDetailsAreCorrect: {
      selector: '/html/body/div[5]/main/a',
      locateStrategy: 'xpath'
    },
	},
};