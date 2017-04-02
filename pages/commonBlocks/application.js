var applicationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@continue');
  },
  addChild: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@addAnotherPerson')
      .click('@dependantChild')
      .click('@add')
  }
};

module.exports = {
  commands: [applicationCommands],
	elements: {
		body: 'body',
    continue: {
        selector: 'input[id=submit]'
    },
    addAnotherPerson: {
      selector: '/html/body/main/section/div[2]/details/summary',
      locateStrategy: 'xpath'
    },
    dependantChild: {
      selector: 'input[id=addAnother_premium-service-appointment-booking-dependant-child]'
    },
    dependantPartnerSpouse: {
      selector: 'input[id=addAnother_premium-service-appointment-booking-dependant-partner]'
    },
    add: {
      selector: 'input[id=addAnotherId]'
    },
	},
};