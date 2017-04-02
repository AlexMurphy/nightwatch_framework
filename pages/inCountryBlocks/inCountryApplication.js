var applicationCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .click('@answerQuestions');
  }
};

module.exports = {
  commands: [applicationCommands],	
  elements: {
    body: 'body',
    answerQuestions: '.button'
    },
};