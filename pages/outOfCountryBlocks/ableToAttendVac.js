var ableToAttendVacCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.waitForElementVisible('@iCanGo', 5000)
			.click('@iCanGo')
			.click('@next')
  }
};

module.exports = {
  commands: [ableToAttendVacCommands],
  elements: {
    body: 'body',
    iCanGo: {
      selector: 'input[id=vacAvailabilityConfirmed_true]'
    },
    next: {
        selector: 'input[id=submit]'
    },
  },
};