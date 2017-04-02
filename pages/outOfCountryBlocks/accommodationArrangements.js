var accommodationArrangementsCommands = {
  submitNo: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@noArrangements')
      .click('@saveAndContinue');
  },
  submitYes: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@arrangements')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [accommodationArrangementsCommands],		
	elements: {
		body: 'body',
		noArrangements: {
			selector: 'input[id=value_false]'
		},
    arrangements: {
      selector: 'input[id=value_true]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};