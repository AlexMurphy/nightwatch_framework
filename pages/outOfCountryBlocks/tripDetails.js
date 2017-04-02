var tripDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
				.setValue('@dayOfArrival', '16')
				.setValue('@monthOfArrival', '08')
				.setValue('@yearOfArrival', '2016')
				.setValue('@dayOfDeparture', '17')
				.setValue('@monthOfDeparture', '10')
				.setValue('@yearOfDeparture', '2016')
				.click('@saveAndContinue')
  }
};

module.exports = {
  commands: [tripDetailsCommands],
	elements: {
		body: 'body',
		dayOfArrival: {
			selector: 'input[id=dateOfArrival_day]'
		},		
		monthOfArrival: {
			selector: 'input[id=dateOfArrival_month]'
		},
		yearOfArrival: {
			selector: 'input[id=dateOfArrival_year]'
		},
		dayOfDeparture: {
			selector: 'input[id=dateOfDeparture_day]'
		},		
		monthOfDeparture: {
			selector: 'input[id=dateOfDeparture_month]'
		},
		yearOfDeparture: {
			selector: 'input[id=dateOfDeparture_year]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};