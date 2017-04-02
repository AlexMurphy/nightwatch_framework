var translationConfirmationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@yesTranslation')
      .click('@saveAndContinue')
  }
};

module.exports = {
  commands: [translationConfirmationCommands],
  elements: {
    body: 'body',
    yesTranslation: {
      selector: 'input[id=translationConfirmed_true]'
    },
    noTranslation: {
      selector: 'input[id=translationConfirmed_false]'
    },
    saveAndContinue: {
      selector: 'input[id=submit]'
    },
  },
};