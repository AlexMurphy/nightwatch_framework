var changeDependantPartnerHomeOfficeReferenceNumberCommands = {
  submitDontknowPartnerHomeOfficeNumber: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@knowPartnersHomeOfficeNumber')
      .assert.elementPresent('@dontknowPartnersHomeOfficeNumber')
      .click('@dontknowPartnersHomeOfficeNumber')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [changeDependantPartnerHomeOfficeReferenceNumberCommands],	
	elements: {
		body: 'body',
		knowPartnersHomeOfficeNumber: {
        	selector: 'input[id=hasReferenceNumber_true]'
        },
    dontknowPartnersHomeOfficeNumber: {
          selector: 'input[id=hasReferenceNumber_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};