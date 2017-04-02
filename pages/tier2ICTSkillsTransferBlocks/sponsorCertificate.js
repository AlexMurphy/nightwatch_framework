var sponsorCertificateCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@certificateNo')
			.click('@saveAndContinue')

  }
};

module.exports = {
  commands: [sponsorCertificateCommands],
	elements: {
		body: 'body',
		certificateYes: {
			selector: 'input[id=hasCertificate_true]'
		},
		certificateNo: {
			selector: 'input[id=hasCertificate_false]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};