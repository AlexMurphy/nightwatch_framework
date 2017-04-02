var dependantPartnerDetailsToChangeCommands = {
  submitNoLongerInARelationship: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@noLongerInARelationship')
      .assert.elementPresent('@partnerHasNewAddress')
      .assert.elementPresent('@otherDetailsAboutMyPartner')
      .click('@noLongerInARelationship')
      .assert.elementPresent('@noLongerInARelationshipDay')
      .assert.elementPresent('@noLongerInARelationshipMonth')
      .assert.elementPresent('@noLongerInARelationshipYear')
      .setValue('@noLongerInARelationshipDay', '21')
      .setValue('@noLongerInARelationshipMonth', '06')
      .setValue('@noLongerInARelationshipYear', '2016')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [dependantPartnerDetailsToChangeCommands],	
	elements: {
		body: 'body',
		noLongerInARelationship: {
        	selector: 'input[id=noLongerInARelationship]'
        },
    noLongerInARelationshipDay: {
          selector: 'input[id=whenRelationshipEnded_day]'
        },
    noLongerInARelationshipMonth: {
          selector: 'input[id=whenRelationshipEnded_month]'
        },
    noLongerInARelationshipYear: {
          selector: 'input[id=whenRelationshipEnded_year]'
        },
    partnerHasNewAddress: {
          selector: 'input[id=partnerHasNewAddress]'
        },
    otherDetailsAboutMyPartner: {
          selector: 'input[id=changeOtherDetails]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};