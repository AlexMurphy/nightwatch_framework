var appointmentBookingCommands = {
  assert: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
    	.assert.containsText("@content", "There is an additional charge of 63.00 GBP per applicant for appointments booked:")
    	.assert.containsText("@content", "before 9am, Monday to Friday")
    	.assert.containsText("@content", "after 4pm on Monday to Friday")
    	.assert.containsText("@content", "all day Saturday")
    	.assert.containsText("@content", "See more information on fees")
    	.assert.containsText("@content", "if you are applying for an European Economic Area (EEA) registration certificate, to work in the UK as a Croatian national or are in local authority care.")
  }
};

module.exports = {
  commands: [appointmentBookingCommands],
	elements: {
		body: 'body',
		content: '#content',
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};