var travellingWithOtherPeopleDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@travellingAlone')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [travellingWithOtherPeopleDetailsCommands],	
	elements: {
		body: 'body',
		travellingAlone: {
			selector: 'input[id=isTravellingWithSomeOneNotPartnerOrSpouse_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};