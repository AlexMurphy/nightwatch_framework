var paymentConfirmationCommands = {
  assertPremium: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.containsText("@content", "If you are unable to attend, please cancel your appointment. If you do not attend your appointment or if you cancel less than 5 working days before your appointment date, we will not refund the £100 appointment fee per applicant unless there are exceptional circumstances. If you booked an out-of-hours appointment you will not be refunded the additional charge of £63 per applicant.")
      .assert.containsText("@content", "If you reschedule an out-of-hours appointment to an appointment during normal hours, and it is less than 5 working days before your appointment date, you will not be refunded the additional charge of £63 per applicant.");
  }
};

module.exports = {
  commands: [paymentConfirmationCommands],
	elements: {
		body: 'body',
    content: '.u-linear-box',
    saveAndContinue: '#submit',
	},
};