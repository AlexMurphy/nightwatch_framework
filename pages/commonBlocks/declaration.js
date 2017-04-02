var declarationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@iAgree')
      .click('@iAgree')
  },
};

module.exports = {
    commands: [declarationCommands],	
	elements: {
		body: 'body',
    iAgree: {
      selector: '/html/body/div[5]/main/div[2]/a',
      locateStrategy: 'xpath'
    },
	},
};