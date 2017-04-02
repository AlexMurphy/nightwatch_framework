var serviceOptionCommands = {
  submitOutOfCountry: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@standardService')
      .click('@saveAndContinue');
  },
  submitPSAB: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@saveAndContinue');
  },
  submitTier2: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@standardService')
      .assert.elementPresent('@priortyService')
      .assert.elementPresent('@premiumService')
      .assert.elementPresent('@superPremiumService')
      .assert.containsText("@serviceOptions", "Standard service : pay £454.00 in total , most people get a decision within 8 weeks")
      .assert.containsText("@serviceOptions", "Priority service : pay £829.00 in total, most people get a decision within 10 working days")
      .assert.containsText("@serviceOptions", "Premium Service : pay £954.00 in total, most people get a decision on the same day")
      .assert.containsText("@serviceOptions", "Super Premium or Mobile Premium Service : pay £954.00 in total, most people get a decision within 24 hours. You will have to pay an additional £8,750 once you have completed your application and we receive your supporting documents.")
      .click('@standardService')
      .click('@saveAndContinue');
  },
  submitTier2General_Student: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@standardService')
      .assert.elementPresent('@priortyService')
      .assert.elementPresent('@premiumService')
      .assert.elementPresent('@superPremiumService')
      .assert.containsText("@serviceOptions", "Standard service : pay £664.00 in total , most people get a decision within 8 weeks")
      .assert.containsText("@serviceOptions", "Priority service : pay £1039.00 in total, most people get a decision within 10 working days")
      .assert.containsText("@serviceOptions", "Premium Service : pay £1164.00 in total, most people get a decision on the same day")
      .assert.containsText("@serviceOptions", "Super Premium or Mobile Premium Service : pay £1164.00 in total, most people get a decision within 24 hours. You will have to pay an additional £8,750 once you have completed your application and we receive your supporting documents.")
      .click('@standardService')
      .click('@saveAndContinue');
  },
  submitMCC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@standardService')
      .click('@standardService')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [serviceOptionCommands],
	elements: {
		body: 'body',
		content: '.content-max-width',
    serviceOptions: '#serviceOption',
    standardService: {
      selector: 'input[id=standard]'
    },
    priortyService: {
      selector: 'input[id=standard]'
    },
    premiumService: {
      selector: 'input[id=standard]'
    },
    superPremiumService: {
      selector: 'input[id=standard]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};