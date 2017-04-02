var completeCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@continue')
      .click('@continue')
  },
};

module.exports = {
    commands: [completeCommands],	
	elements: {
		body: 'body',
    continue: {
      selector: 'input[id=submit]'
    },
	},
};