var detailsToChangeCommands = {
  submitDependantsDetails: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@personalDetails')
      .assert.elementPresent('@legalRepresentativesDetails')
      .assert.elementPresent('@criminalConvictions')
      .assert.elementPresent('@contactDetails')
      .assert.elementPresent('@dependantsDetails')
      .assert.elementPresent('@otherDetails')
      .click('@dependantsDetails')
      .click('@saveAndContinue');
  },
  submitCriminalConvictions: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@personalDetails')
      .assert.elementPresent('@legalRepresentativesDetails')
      .assert.elementPresent('@criminalConvictions')
      .assert.elementPresent('@contactDetails')
      .assert.elementPresent('@dependantsDetails')
      .assert.elementPresent('@otherDetails')
      .click('@criminalConvictions')
      .click('@saveAndContinue');
  },
  submitOtherDetails: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@personalDetails')
      .assert.elementPresent('@legalRepresentativesDetails')
      .assert.elementPresent('@criminalConvictions')
      .assert.elementPresent('@contactDetails')
      .assert.elementPresent('@dependantsDetails')
      .assert.elementPresent('@otherDetails')
      .click('@otherDetails')
      .click('@saveAndContinue');
  },
  submitPersonalDetails: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@personalDetails')
      .assert.elementPresent('@legalRepresentativesDetails')
      .assert.elementPresent('@criminalConvictions')
      .assert.elementPresent('@contactDetails')
      .assert.elementPresent('@dependantsDetails')
      .assert.elementPresent('@otherDetails')
      .click('@personalDetails')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [detailsToChangeCommands],	
	elements: {
		body: 'body',
		personalDetails: {
        	selector: 'input[id=personalDetails]'
        },
    legalRepresentativesDetails: {
          selector: 'input[id=legalRepresentative]'
        },
    criminalConvictions: {
          selector: 'input[id=criminalConvictions]'
        },
    contactDetails: {
          selector: 'input[id=contactDetails]'
        },
    dependantsDetails: {
          selector: 'input[id=dependantDetails]'
        },
    otherDetails: {
          selector: 'input[id=otherDetails]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};