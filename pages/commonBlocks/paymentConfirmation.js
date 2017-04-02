var paymentConfirmationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 1000)
			.click('@saveAndContinue');
  },
  assertEEAOrCR: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "65.00 GBP")
      .click('@saveAndContinue');
  },
  assertBRP: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£556.00")
      .click('@saveAndContinue');
  },
  assertTOC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£723.00")
      .click('@saveAndContinue');
  },
  assertTOC_Premium: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£786.00")
      .click('@saveAndContinue');
  },
  assertNTL: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£808.00")
      .click('@saveAndContinue');
  },
  assertTier5_CESC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£675.00")
      .click('@saveAndContinue');
  },
  assertTier5_NONCESC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£730.00")
      .click('@saveAndContinue');
  },
  assertSET: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£2375.00")
      .click('@saveAndContinue');
  },
  assertSETWithChild: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£4750.00")
      .click('@saveAndContinue');
  },
  assertSET_Premium: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@saveAndContinue', 30000)
      .assert.containsText('@content', "£2438.00")
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [paymentConfirmationCommands],
	elements: {
		body: 'body',
    content: '#content',
    saveAndContinue: '#submit',
	},
};