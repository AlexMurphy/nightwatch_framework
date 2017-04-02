var criminalConvictionTypeCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noConvictions')
      .click('@saveAndContinue');
  },
  submitCriminalConviction: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@criminalConviction')
      .assert.elementPresent('@drivingOffence')
      .assert.elementPresent('@arrestedAndCharged')
      .assert.elementPresent('@aCaution')
      .assert.elementPresent('@aCourtJudgment')
      .assert.elementPresent('@aFine')
      .click('@criminalConviction')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [criminalConvictionTypeCommands],	
	elements: {
		body: 'body',
    criminalConviction: {
      selector: 'input[id=convictionTypeRef_generalConviction]'
    },
    drivingOffence: {
      selector: 'input[id=convictionTypeRef_motoringConviction]'
    },
    arrestedAndCharged: {
      selector: 'input[id=convictionTypeRef_outstandingCriminalProceeding]'
    },
    aCaution: {
      selector: 'input[id=convictionTypeRef_officialCaution]'
    },
    aCourtJudgment: {
      selector: 'input[id=convictionTypeRef_courtJudgment]'
    },
    aFine: {
      selector: 'input[id=convictionTypeRef_civilPenalty]'
    },
    noConvictions: {
      selector: 'input[id=convictionTypeRef_none]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};