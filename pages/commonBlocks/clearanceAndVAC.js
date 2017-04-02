var clearanceAndVACCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@ihsExempt')
      .assert.elementPresent('@notIHSExempt')
      .click('@ihsExempt')
      // .click('.btn nextButton button')
      .click('@saveAndContinue')
  }
};

module.exports = {
    commands: [clearanceAndVACCommands],	
	elements: {
		body: 'body',
    ihsExempt: {
      selector: 'input[id=ioMExempt-true]'
    },
    notIHSExempt: {
      selector: 'input[id=ioMExempt-false]'
    },
    saveAndContinue: {
      selector: '/html/body/div[5]/main/form/div[3]/input',
      locateStrategy: 'xpath'
    },
	},
};