var childFromRelationshipWithExPartnerBirthDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Japan')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Japan')
			.setValue('@placeOfBirth', 'Kagawa-ken')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [childFromRelationshipWithExPartnerBirthDetailsCommands],
	elements: {
		body: 'body',
		nationality: {
			selector: 'input[id=nationalityRefs_0_ui]'
		},
		dateOfBirth: {
			selector: 'input[id=dateOfBirth_day]'
		},
		monthOfBirth: {
			selector: 'input[id=dateOfBirth_month]'
		},
		yearOfBirth: {
			selector: 'input[id=dateOfBirth_year]'
		},
		countryOfBirth: {
			selector: 'input[id=countryOfBirthRef_ui]'
		},
		placeOfBirth: {
			selector: 'input[id=placeOfBirth]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};