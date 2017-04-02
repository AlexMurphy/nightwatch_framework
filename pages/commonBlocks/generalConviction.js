var generalCriminalCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@convictedOf')
      .assert.elementPresent('@detailsOfSentence')
      .assert.elementPresent('@dateOfSentence')
      .assert.elementPresent('@monthOfSentence')
      .assert.elementPresent('@yearOfSentence')
      .assert.elementPresent('@countryOfSentence')
      .setValue('@convictedOf', 'Being Too Handsome')
      .setValue('@detailsOfSentence', 'Wear a paper bag over head for 6 months')
      .setValue('@dateOfSentence', '17')
      .setValue('@monthOfSentence', '06')
      .setValue('@yearOfSentence', '2016')
      .setValue('@countryOfSentence', 'Korea, South (Republic of Korea)')
      .click('@body')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [generalCriminalCommands],	
	elements: {
		body: 'body',
    convictedOf:'#offence',
    detailsOfSentence: '#details',
    dateOfSentence: {
      selector: 'input[id=sentencingDate_day]'
    },
    monthOfSentence: {
      selector: 'input[id=sentencingDate_month]'
    },
    yearOfSentence: {
      selector: 'input[id=sentencingDate_year]'
    },
    countryOfSentence: {
      selector: 'input[id=countryRef_ui]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};