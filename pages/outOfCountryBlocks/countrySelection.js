var countrySelectionCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@country', 'China')
			.click('@body')
			.click('@next')
  },
  submitIndia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'India')
      .click('@body')
      .click('@next')
  },
  submitLithuania: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'Lithuania')
      .click('@body')
      .click('@next')
  },
  submitMoldova: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'Moldova, Republic of')
      .click('@body')
      .click('@next')
  },
  submitPhilippines: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'Philippines')
      .click('@body')
      .click('@next')
  },
  submitsouthAfrica: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'South Africa')
      .click('@body')
      .click('@next')
  },
  submitUAE: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'United Arab Emirates')
      .click('@body')
      .click('@next')
  },
  submitUSA: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@country', 'United States of America')
      .click('@body')
      .click('@next')
  }
};

module.exports = {
  commands: [countrySelectionCommands],
  elements: {
    body: 'body',
    country: {
      selector: 'input[id=countryCode_ui]'
    },
    next: {
        selector: 'input[id=submit]'
    },
  },
};