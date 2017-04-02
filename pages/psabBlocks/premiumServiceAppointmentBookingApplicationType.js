var premiumServiceAppointmentBookingApplicationTypeCommands = {
  submitBRP: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@transferOrReplacement')
			.click('@brp')
			.click('@saveAndContinue');
  },
  submitTOC: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.containsText('@content', "Your application type")
			.click('@transferOrReplacement')
			.click('@toc')
			.click('@saveAndContinue');
  },
  submitNTL: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.containsText('@content', "Your application type")
			.click('@transferOrReplacement')
			.click('@ntl')
			.click('@saveAndContinue');
  },
  submitTier5Migrant: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.elementPresent('@pbsWorkAndDependants')
    	.click('@pbsWorkAndDependants')
    	.click('@saveAndContinue')
    	.assert.elementPresent('@pbsDependantTiers1and5')
    	.assert.elementPresent('@tier5Migrant')
    	.assert.elementPresent('@tier1ExceptionalTalent')
			.click('@tier5Migrant')
			.click('@saveAndContinue')
  },
  submitCR1: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.containsText('@content', "Your application type")
			.click('@eeaOrcr')
    	.click('@saveAndContinue')
			.click('@cr1')
			.click('@saveAndContinue');
  },
  submitCR2: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@eeaOrcr')
			.click('@cr2')
			.click('@saveAndContinue');
  },
  submitCR3: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@eeaOrcr')
			.click('@cr3')
			.click('@saveAndContinue');
  },
  submitEEAQP: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@eeaOrcr')
			.click('@eeaqp')
			.click('@saveAndContinue');
  },
  submitSETAF: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@transferOrReplacement')
      .assert.elementPresent('@eeaOrcr')
      .assert.elementPresent('@settlement')
			.click('@settlement')
      .assert.elementPresent('@setaf')
      .assert.elementPresent('@setf')
      .assert.elementPresent('@setlr')
      .assert.elementPresent('@setm')
      .assert.elementPresent('@seto')
			.click('@setaf')
			.click('@saveAndContinue');
  },
  submitSETF: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@settlement')
			.click('@setf')
			.click('@eeaqp')
			.click('@saveAndContinue');
  },
  submitSETLR: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@settlement')
			.click('@setlr')
			.click('@eeaqp')
			.click('@saveAndContinue');
  },
  submitSETM: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@settlement')
			.click('@setm')
			.click('@eeaqp')
			.click('@saveAndContinue');
  },
  submitSETO: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@settlement')
			.click('@seto')
			.click('@eeaqp')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [premiumServiceAppointmentBookingApplicationTypeCommands],
	elements: {
		body: 'body',
		content: '#editInformation',
		transferOrReplacement: {
			selector: 'input[id=applicationCategory_transferOrReplacement]'
		},
		brp: {
			selector: 'input[id=applicationType_brp-rc]'
		},
		toc: {
			selector: 'input[id=applicationType_toc]'
		},
		ntl: {
			selector: 'input[id=applicationType_ntl]'
		},
		pbsWorkAndDependants: {
			selector: 'input[id=applicationCategory_pbsWorkAndDependants'
		},
		pbsDependantTiers1and5: {
			selector: 'input[id=applicationType_pbs-dependant'
		},
		tier5Migrant: {
			selector: 'input[id=applicationType_tier-5-migrant'
		},
		tier1ExceptionalTalent: {
			selector: 'input[id=applicationType_tier-1-exceptional-talent-visa'
		},
		eeaOrcr: {
			selector: 'input[id=applicationCategory_eeaOrCrResidentPermit'
		},
		cr1: {
			selector: 'input[id=applicationType_cr1]'
		},
		cr2: {
			selector: 'input[id=applicationType_cr2]'
		},
		cr3: {
			selector: 'input[id=applicationType_cr3]'
		},
		eeaqp	: {
			selector: 'input[id=applicationType_eea-qp]'
		},
		settlement	: {
			selector: 'input[id=applicationCategory_settlement]'
		},
		setaf	: {
			selector: 'input[id=applicationType_set-af]'
		},
		setf	: {
			selector: 'input[id=applicationType_set-f]'
		},
		setlr	: {
			selector: 'input[id=applicationType_set-lr]'
		},
		setm	: {
			selector: 'input[id=applicationType_set-m]'
		},
		seto	: {
			selector: 'input[id=applicationType_set-o]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};