var cardCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('input[id=cardNoInput]', '4111111111111111')
      .setValue('input[id=cardCVV]', '123')
      .click('select[name="cardExp.month"] option[Value="1"]')
      .click('select[name="cardExp.year"] option[Value="2017"]')
      .setValue('@name', 'Mike Patton')
      .setValue('@address1', 'Qwerty')
      .setValue('@town', 'Qwerty')
      .setValue('@postcode', 'SW1 4DF')
      .click('@makePayment')
  }
};

module.exports = {
  commands: [cardCommands],		
	elements: {
		body: 'body',
    cardNumber: {
        selector: 'input[id=cardNoInput]'
    },
    securityCard: {
        selector: 'input[id=cardCVV]'
    },
    month: {
      selector: 'select[name=cardExp.month]'
    },
    year: {
      selector: 'select[name=cardExp.year]'
    },
    name: {
        selector: 'input[id=name]'
    },
    address1: {
        selector: 'input[id=address1]'
    },
    town: {
        selector: 'input[id=town]'
    },
    postcode: {
        selector: 'input[id=postcode]'
    },
    makePayment: {
        selector: 'input[id=op-PMMakePayment]'
    },
	},
};