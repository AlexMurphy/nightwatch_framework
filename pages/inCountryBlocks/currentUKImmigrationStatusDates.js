var currentUKImmigrationStatusDatesCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@startDate', '11')
			.setValue('@startMonth', '11')
			.setValue('@startYear', '2006')
			.setValue('@endDate', '11')
			.setValue('@endMonth', '11')
			.setValue('@endYear', '2016')
			.click('@saveAndContinue')
  },
};

module.exports = {
  commands: [currentUKImmigrationStatusDatesCommands],
	elements: {
		body: 'body',
		startDate: {
			selector: 'input[id=startDate_day]'
		},
		startMonth: {
			selector: 'input[id=startDate_month]'
		},
		startYear: {
			selector: 'input[id=startDate_year]'
		},
		endDate: {
			selector: 'input[id=endDate_day]'
		},
		endMonth: {
			selector: 'input[id=endDate_month]'
		},
		endYear: {
			selector: 'input[id=endDate_year]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};