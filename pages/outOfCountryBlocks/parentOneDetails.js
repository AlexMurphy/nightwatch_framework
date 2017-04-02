module.exports = {
	
	elements: {
		body: 'body',
		noParentDetails: {
			selector: 'input[id=parentIsUnknown]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
		haveNoParents: {
			selector: '/html/body/main/section/section/div[1]/form/div/details/summary',
			locateStrategy: 'xpath'
		}
	}
};