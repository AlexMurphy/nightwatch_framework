var documentsCommands = {
  submitGotIHS: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .setValue('@ihs', 'IHS123456789')
      .click('@saveAndContinue');
  }
};

module.exports = {
  commands: [documentsCommands],
  elements: {
    body: 'body',
    ihs: {
        selector: 'input[id=reference]'
    },
    iDontHaveIHS: {
        selector: '/html/body/main/section/section/div[2]/form/div/details/summary/span',
        locateStrategy: 'xpath'
    },
    goToIHS: {
        selector: 'input[id=pay-ihs]'
    },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
  },
};