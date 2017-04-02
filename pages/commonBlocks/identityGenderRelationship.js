var identityGenderRelationshipCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@genderUnspecified')
			.click('select[id="relationshipStatus"] option[value="S"]')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [identityGenderRelationshipCommands],
	elements: {
		body: 'body',
		genderMale: {
			selector: 'input[id=gender_1]'
		},
		genderFemale: {
			selector: 'input[id=gender_2]'
		},
		genderUnspecified: {
			selector: 'input[id=gender_9]'
		},
		relationshipStatus: {
			selector: 'select[id=relationshipStatus]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};