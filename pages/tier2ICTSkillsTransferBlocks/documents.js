var documentsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [documentsCommands],
  elements: {
    body: 'body',
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};