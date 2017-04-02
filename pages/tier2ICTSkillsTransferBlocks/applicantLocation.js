var contactEmailCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@currentlyInUK')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [contactEmailCommands], 
  elements: {
    body: 'body',
    currentlyInUK: {
      selector: 'input[id=isUk_true]'
    },
    currentlyOutOfUK: {
      selector: 'input[id=isUk_false]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};