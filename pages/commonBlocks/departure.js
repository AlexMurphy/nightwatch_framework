var departureCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@returnToMyVisaApplication')
      .click('@returnToMyVisaApplication')
  },
};

module.exports = {
    commands: [departureCommands],	
	elements: {
		body: 'body',
    returnToMyVisaApplication: {
      selector: 'input[id=Submit]'
    },
	},
};