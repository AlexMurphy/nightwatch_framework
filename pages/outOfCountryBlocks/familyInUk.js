var familyInUkCommands = {
  submitNo: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noFamiyInUK')
      .click('@saveAndContinue');
  },
  submitYes: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@yesFamiyInUK')
      .click('@saveAndContinue')
  }
};

module.exports = {
  commands: [familyInUkCommands],
	elements: {
		body: 'body',
		noFamiyInUK: {
			selector: 'input[id=value_false]'
		},
    yesFamiyInUK: {
      selector: 'input[id=value_true]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};