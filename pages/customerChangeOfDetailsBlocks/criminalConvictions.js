var criminalConvictionsCommands = {
  submitNoOtherCriminalConvictions: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@otherCriminalConvictions')
      .assert.elementPresent('@noOtherCriminalConvictions')
      .click('@noOtherCriminalConvictions')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [criminalConvictionsCommands],	
	elements: {
		body: 'body',
		otherCriminalConvictions: {
        	selector: 'input[id=addAnother_true]'
        },
    noOtherCriminalConvictions: {
          selector: 'input[id=addAnother_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};