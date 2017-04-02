var cardSTSSimulatorCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('@continue')
  }
};

module.exports = {
  commands: [cardSTSSimulatorCommands],
	elements: {
		body: 'body',
    continue: {
        selector: '/html/body/table/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[2]/form/table/tbody/tr/td/table/tbody/tr[6]/td/label/nobr/input',
        locateStrategy: 'xpath'
    },
	},
};