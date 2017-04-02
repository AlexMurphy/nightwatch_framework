var changeDependantPartnerPassportCommands = {
  submitDontKnowPartnersPassportNumber: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@knowPartnersPassportNumber')
      .assert.elementPresent('@dontknowPartnersPassportNumber')
      .click('@dontknowPartnersPassportNumber')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [changeDependantPartnerPassportCommands],	
	elements: {
		body: 'body',
		knowPartnersPassportNumber: {
        	selector: 'input[id=yesNo_true]'
        },
    dontknowPartnersPassportNumber: {
          selector: 'input[id=yesNo_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};