var hasTravelDocumentCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.assert.containsText('#editInformation', "Your passport")
			.click('@PassportYes')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [hasTravelDocumentCommands],
	elements: {
		body: 'body',
		PassportYes: {
			selector: 'input[id=hasTravelDocument_true]'
		},
		PassportNo: {
			selector: 'input[id=hasTravelDocument_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};