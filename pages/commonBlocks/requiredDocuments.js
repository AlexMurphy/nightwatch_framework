var requiredDocumentsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@mandatoryDocuments')
      .click('@saveAndContinue');
  },
  submitTier2: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@passport')
      .click('@passportPhoto')
      .click('@statement')
      .click('@saveAndContinue');
  },
  submitTier2GeneralStudent: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@passport')
      .assert.elementPresent('@passportPhoto')
      .assert.elementPresent('@passport')
      .assert.elementPresent('@statement')
      .assert.elementPresent('@proofOfQualification')
      .assert.elementPresent('@proofOfEnglish')
      .click('@passport')
      .click('@passportPhoto')
      .click('@statement')
      .click('@proofOfQualification')
      .click('@proofOfEnglish')
      .click('@saveAndContinue');
  },
  submitMCC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@mccPassport')
      .click('@mccPassport')
      .click('@saveAndContinue');
  },
  submitMCC_Dependants: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@mccPassport')
      .assert.elementPresent('@mccOtherDocuments')
      .click('@mccPassport')
      .click('@mccOtherDocuments')
      .click('@saveAndContinue');
  },
  submitMCC_PersonalDetails: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@mccPassport')
      .assert.elementPresent('@mccOtherDocuments')
      .assert.elementPresent('@crimeReferenceNumber')
      .click('@mccPassport')
      .click('@mccOtherDocuments')
      .click('@crimeReferenceNumber')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [requiredDocumentsCommands],
	elements: {
		body: 'body',
		mandatoryDocuments: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset/div/div/label/input',
      locateStrategy: 'xpath'
		},
    passport: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[1]/div/div[1]/label/input',
      locateStrategy: 'xpath'
    },
    passportPhoto: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[1]/div/div[2]/label/input',
      locateStrategy: 'xpath'
    },
    statement: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[2]/div/div[1]/label/input',
      locateStrategy: 'xpath'
    },
    proofOfQualification: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[2]/div/div[2]/label/input',
      locateStrategy: 'xpath'
    },
    proofOfEnglish: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[2]/div/div[3]/label/input',
      locateStrategy: 'xpath'
    },
    mccPassport: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[1]/div/div/label/input',
      locateStrategy: 'xpath'
    },
    mccOtherDocuments: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[2]/div/div/label/input',
      locateStrategy: 'xpath'
    },
    crimeReferenceNumber: {
      selector: '/html/body/main/section/section/div[1]/form/div/fieldset[2]/div/div[2]/label/input',
      locateStrategy: 'xpath'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};