var shortageOccupationCommands = {
  submitNotInShortage: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@jobIsNotInShortage')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [shortageOccupationCommands],
	elements: {
		body: 'body',
		jobIsInShortage: {
			selector: 'input[id=isShortageOccupation_true]'
		},
    jobIsNotInShortage: {
        selector: 'input[id=isShortageOccupation_false]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};