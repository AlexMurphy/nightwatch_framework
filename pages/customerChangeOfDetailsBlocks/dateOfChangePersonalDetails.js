var dateOfChangePersonalDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@dateEffective')
      .assert.elementPresent('@monthEffective')
      .assert.elementPresent('@yearEffective')
      .setValue('@dateEffective', '20')
      .setValue('@monthEffective', '06')
      .setValue('@yearEffective', '2016')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [dateOfChangePersonalDetailsCommands],	
	elements: {
		body: 'body',
    dateEffective: {
          selector: 'input[id=dateEffective_day]'
        },
    monthEffective: {
          selector: 'input[id=dateEffective_month]'
        },
    yearEffective: {
          selector: 'input[id=dateEffective_year]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};