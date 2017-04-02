var changeOtherDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@details')
      .setValue('@details', 'I am a government clone')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [changeOtherDetailsCommands],	
	elements: {
		body: 'body',
		details: '#details',
    noOtherCriminalConvictions: {
          selector: 'input[id=addAnother_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};