var legalRepCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@legRepNo')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [legalRepCommands], 
  elements: {
    body: 'body',
    legRepYes: {
      selector: 'input[id=hasLegalRep_true]'
    },
    legRepNo: {
      selector: 'input[id=hasLegalRep_false]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};