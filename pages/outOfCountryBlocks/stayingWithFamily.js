var stayingWithFamilyCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@saveAndContinue')
  }
};

module.exports = {
  commands: [stayingWithFamilyCommands],
	elements: {
		body: 'body',
		relationOne: {
			selector: 'input[id=familyMembers[0]]'
		},
    relationTwo: {
      selector: 'input[id=familyMembers[1]]'
    },
    relationThree: {
      selector: 'input[id=familyMembers[2]]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};