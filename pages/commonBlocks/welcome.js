var welcomeCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@continue')
      .click('@continue');
  }
};

module.exports = {
    commands: [welcomeCommands],	
	elements: {
		body: 'body',
    continue: {
        selector: 'input[id=Submit]'
    },
	},
};