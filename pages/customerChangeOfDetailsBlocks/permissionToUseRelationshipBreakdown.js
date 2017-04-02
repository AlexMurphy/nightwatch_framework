var permissionToUseRelationshipBreakdownCommands = {
  submitGivePermission: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
      .assert.elementPresent('@givePermission')
      .assert.elementPresent('@dontGivePermission')
      .click('@givePermission')
      .click('@saveAndContinue');
  }
};

module.exports = {
    commands: [permissionToUseRelationshipBreakdownCommands],	
	elements: {
		body: 'body',
		givePermission: {
        	selector: 'input[id=value_true]'
        },
    dontGivePermission: {
          selector: 'input[id=value_false]'
        },
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};