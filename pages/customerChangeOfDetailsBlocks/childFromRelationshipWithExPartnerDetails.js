var hasChildrenInTheUKCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@childHasOtherGuardians')
      .assert.elementPresent('@childHasNoOtherGuardians')
      .assert.elementPresent('@childLivesWithApplicantOrEx')
      .assert.elementPresent('@childDoesNotLiveWithApplicantOrEx')
      .assert.elementPresent('@timeApplicantOrExSpendWithChild')
      .assert.elementPresent('@applicantOrExProvideChildMaintenance')
      .assert.elementPresent('@applicantOrExDoNotProvideChildMaintenance')
      .assert.elementPresent('@areInvolvedInFamilyCourtCases')
      .assert.elementPresent('@areNotInvolvedInFamilyCourtCases')
      .click('@childHasOtherGuardians')
      .setValue('@namesOfOtherGuardians', 'Sometimes I feel very sad')
      .click('@childDoesNotLiveWithApplicantOrEx')
      .setValue('@namesOfWhoTheyLiveWith', "Can't find nothin' I can put my heart and soul into")
      .setValue('@timeApplicantOrExSpendWithChild', 'No one wants to help me look for places where new things might be found')
      .click('@applicantOrExProvideChildMaintenance')
      .setValue('@howMuchChildMaintenance', 'Where can I turn when my fair weather friends cop out,')
      .click('@areInvolvedInFamilyCourtCases')
      .setValue('@courtCaseDetails', "I Just Wasn't Made for These Times")
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [hasChildrenInTheUKCommands],	
	elements: {
		body: 'body',
		childHasOtherGuardians: {
        	selector: 'input[id=doesChildHaveOtherParentsOrGuardians_true]'
        },
    childHasNoOtherGuardians: {
          selector: 'input[id=doesChildHaveOtherParentsOrGuardians_false]'
        },
    namesOfOtherGuardians: {
          selector: 'textarea[id=namesOfOtherParentsOrGuardians]'
        },
    childLivesWithApplicantOrEx: {
          selector: 'input[id=doesChildLiveWithApplicantOrPartner_true]'
        },
    childDoesNotLiveWithApplicantOrEx: {
          selector: 'input[id=doesChildLiveWithApplicantOrPartner_false]'
        },
    namesOfWhoTheyLiveWith: {
          selector: 'textarea[id=namesOfWhoTheyLiveWith]'
        },
    timeApplicantOrExSpendWithChild: {
          selector: 'textarea[id=howMuchTimeSpentWithApplicantOrPartner]'
        },
    applicantOrExProvideChildMaintenance: {
          selector: 'input[id=doesApplicantOrPartnerProvideChildMaintenance_true]'
        },
    applicantOrExDoNotProvideChildMaintenance: {
          selector: 'input[id=doesApplicantOrPartnerProvideChildMaintenance_false]'
        },
    howMuchChildMaintenance: {
          selector: 'textarea[id=howMuchChildMaintenance]'
        },
    areInvolvedInFamilyCourtCases: {
          selector: 'input[id=involvedInFamilyCourtCase_true]'
        },
    areNotInvolvedInFamilyCourtCases: {
          selector: 'input[id=involvedInFamilyCourtCase_false]'
        },
    courtCaseDetails: {
          selector: 'textarea[id=courtCaseDetails]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};