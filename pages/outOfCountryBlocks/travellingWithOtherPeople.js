var travellingWithOtherPeopleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@travellingWithoutGroup')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [travellingWithOtherPeopleCommands],
	elements: {
		body: 'body',
		travellingWithoutGroup: {
			selector: 'input[id=isTravellingWithOtherPeople_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};