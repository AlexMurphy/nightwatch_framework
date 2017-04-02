var declarationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@iAccept');
  }
};

module.exports = {
  commands: [declarationCommands],
	elements: {
		body: 'body',
    iAccept: {
        selector: 'input[id=submit]'
    },
	},
};