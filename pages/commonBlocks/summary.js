var summaryCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@next')
      .click('@next')
  },
};

module.exports = {
    commands: [summaryCommands],	
	elements: {
		body: 'body',
    next: {
      selector: '/html/body/div[5]/main/form/div/input',
      locateStrategy: 'xpath'
    },
	},
};