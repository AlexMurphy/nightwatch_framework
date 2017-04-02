var changeOfPersonalDetailsCommands = {
  submitChangeAllPersonalDetails: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@name')
      .click('@name')
      .assert.elementPresent('@title')
      .assert.elementPresent('@givenName')
      .assert.elementPresent('@nationality')
      .click('@nationality')
      .assert.elementPresent('@newNationality')
      .assert.elementPresent('@passport')
      .click('@passport')
      .assert.elementPresent('@newPassportNumber')
      .assert.elementPresent('@newPlaceOfIssue')
      .assert.elementPresent('@newIssueDate')
      .assert.elementPresent('@newIssueMonth')
      .assert.elementPresent('@newIssueYear')
      .assert.elementPresent('@newExpiryDate')
      .assert.elementPresent('@newExpiryMonth')
      .assert.elementPresent('@newExpiryYear')
      .assert.elementPresent('@lostOrStolen')
      .assert.elementPresent('@notLostOrStolen')
      .click('select[id="newTitle"] option[value="Miss"]')
      .setValue('@givenName', 'Marissa')
      .setValue('@familyName', ' Paternoster')
      .setValue('@nationality', 'US Citizen')
      .setValue('@newPassportNumber', '1111111111')
      .setValue('@newPlaceOfIssue', 'Djibouti')
      .setValue('@newIssueDate', '22')
      .setValue('@newIssueMonth', '06')
      .setValue('@newIssueYear', '2016')
      .setValue('@newExpiryDate', '22')
      .setValue('@newExpiryMonth', '06')
      .setValue('@newExpiryYear', '2026')
      .click('@lostOrStolen')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [changeOfPersonalDetailsCommands],	
	elements: {
		body: 'body',
    newNationality: '#newNationality',
		name: {
        	selector: 'input[id=changeName]'
        },
    title: {
          selector: 'select[id=newTitle]'
        },
    givenName: {
          selector: 'input[id=newGivenName]'
        },
    familyName: {
          selector: 'input[id=newFamilyName]'
        },
    nationality: {
          selector: 'input[id=changeNationality]'
        },
    passport: {
          selector: 'input[id=changePassport]'
        },
    newPassportNumber: {
          selector: 'input[id=newTravelDocumentNumber]'
        },
    newPlaceOfIssue: {
          selector: 'input[id=newPlaceOfIssue]'
        },
    newIssueDate: {
          selector: 'input[id=newDateOfIssue_day]'
        },
    newIssueMonth: {
          selector: 'input[id=newDateOfIssue_month]'
        },
    newIssueYear: {
          selector: 'input[id=newDateOfIssue_year]'
        },
    newExpiryDate: {
          selector: 'input[id=newExpiryDate_day]'
        },
    newExpiryMonth: {
          selector: 'input[id=newExpiryDate_month]'
        },
    newExpiryYear: {
          selector: 'input[id=newExpiryDate_year]'
        },
    lostOrStolen: {
          selector: 'input[id=previousPassportLostOrStolen_true]'
        },
    notLostOrStolen: {
          selector: 'input[id=previousPassportLostOrStolen_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};