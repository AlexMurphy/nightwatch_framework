var visaTypeCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@startNow');
  }
};

module.exports = {
  commands: [visaTypeCommands],
  elements: {
    body: 'body',
    startNow: {
        selector: 'input[id=submit]'
    },
  },
};