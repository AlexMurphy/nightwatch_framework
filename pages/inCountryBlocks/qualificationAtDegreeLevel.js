var qualificationAtDegreeLevelCommands = {
  submitbachelorsDegree: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@bachelorsDegree')
    	.assert.elementPresent('@mastersDegree')
    	.assert.elementPresent('@professionalGraduateDiploma')
    	.assert.elementPresent('@postgraduateCertificate')
    	.assert.elementPresent('@atleastoneyearsStudy')
    	.assert.elementPresent('@none')
			.click('@bachelorsDegree')
			.click('@saveAndContinue')
  },
  submitprofessionalGraduateDiploma: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@bachelorsDegree')
    	.assert.elementPresent('@mastersDegree')
    	.assert.elementPresent('@professionalGraduateDiploma')
    	.assert.elementPresent('@postgraduateCertificate')
    	.assert.elementPresent('@atleastoneyearsStudy')
    	.assert.elementPresent('@none')
			.click('@professionalGraduateDiploma')
			.click('@saveAndContinue')
  },
};

module.exports = {
  commands: [qualificationAtDegreeLevelCommands],
	elements: {
		body: 'body',
		bachelorsDegree: {
			selector: 'input[id=ref_bachelor]'
		},
		mastersDegree: {
			selector: 'input[id=ref_masters]'
		},
		professionalGraduateDiploma: {
			selector: 'input[id=ref_diploma]'
		},
		postgraduateCertificate: {
			selector: 'input[id=ref_postgradCert]'
		},
		atleastoneyearsStudy: {
			selector: 'input[id=ref_phd]'
		},
		none: {
			selector: 'input[id=ref_none]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};