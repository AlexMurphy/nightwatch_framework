var maintenanceEvidenceDetailsListCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@financialInstitution', 'King Ov Tests')
      .click('@statement')
			.click('@saveAndContinue')
			.click('@anotherDocumentFalse')
			.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [maintenanceEvidenceDetailsListCommands],
	elements: {
		body: 'body',
		financialInstitution: {
			selector: 'input[id=financialInstitutionName]'
		},
		statement: {
			selector: 'input[id=maintenanceEvidenceKindRef_STATEMENT]'
		},
		passbook: {
			selector: 'input[id=maintenanceEvidenceKindRef_PASSBOOK]'
		},
		letter: {
			selector: 'input[id=maintenanceEvidenceKindRef_LETTER]'
		},
		anotherDocumentTrue: {
			selector: 'input[id=addAnother_true]'
		},
		anotherDocumentFalse: {
			selector: 'input[id=addAnother_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};