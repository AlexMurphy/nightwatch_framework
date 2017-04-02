var declarationCommands = {
  submitApplicant: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@iamApplicant')
      .click('@iAccept');
  }
};

module.exports = {
  commands: [declarationCommands],
	elements: {
		body: 'body',
    iamApplicant: {
        selector: 'input[id=agreement_forMyself]'
    },
    iamRepresentative: {
        selector: 'input[id=agreement_forAnother]'
    },
    iAccept: {
        selector: 'input[id=submit]'
    },
	},
};