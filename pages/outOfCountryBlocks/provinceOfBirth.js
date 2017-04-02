var provinceOfBirthCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@province', 'Shanghai Municipality')
      .click('@body')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [provinceOfBirthCommands],
  elements: {
    body: 'body',
    province: {
      selector: 'input[id=provinceRef_ui]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};