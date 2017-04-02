var birthDetailsCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'China')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'China')
			.setValue('@placeOfBirth', 'Shanghai')
			.click('@saveAndContinue');
  },
  submitCyprus: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Cyprus')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Cyprus')
			.setValue('@placeOfBirth', 'Nicosia')
			.click('@saveAndContinue');
  },
  submitDjibouti: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Djibouti')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Djibouti')
			.setValue('@placeOfBirth', 'Djibouti')
			.click('@saveAndContinue');
  },
  submitEritrea: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Eritrea')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Eritrea')
			.setValue('@placeOfBirth', 'Asmara')
			.click('@saveAndContinue');
  },
  submitIndia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'India')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'India')
			.setValue('@placeOfBirth', 'Mumbai')
			.click('@saveAndContinue');
  },
  submitKenya: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Kenya')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Kenya')
			.setValue('@placeOfBirth', 'Nairobi')
			.click('@saveAndContinue');
  },
  submitLithuania: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Lithuania')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Lithuania')
			.setValue('@placeOfBirth', 'Vilnius')
			.click('@saveAndContinue');
  },
  submitMalawi: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Malawi')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Malawi')
			.setValue('@placeOfBirth', 'Lilongwe')
			.click('@saveAndContinue');
  },
  submitMarshallIslands: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Marshall Islands')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Marshall Islands')
			.setValue('@placeOfBirth', 'Majuro')
			.click('@saveAndContinue');
  },
  submitMicronesia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Micronesia (Federated States of)')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Micronesia (Federated States of)')
			.setValue('@placeOfBirth', 'Palikir')
			.click('@saveAndContinue');
  },
  submitMoldova: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Moldova, Republic of')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Moldova, Republic of')
			.setValue('@placeOfBirth', 'Chisinau')
			.click('@saveAndContinue');
  },
  submitMozambique: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Mozambique')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Mozambique')
			.setValue('@placeOfBirth', 'Maputo')
			.click('@saveAndContinue');
  },
  submitNamibia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Namibia')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Namibia')
			.setValue('@placeOfBirth', 'Windhoek')
			.click('@saveAndContinue');
  },
  submitPhilippines: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Philippines')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Philippines')
			.setValue('@placeOfBirth', 'Manila')
			.click('@saveAndContinue');
  },
  submitsaoTomeAndPrincipe: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Sao Tome and Principe')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Sao Tome and Principe')
			.setValue('@placeOfBirth', 'Luanda')
			.click('@saveAndContinue');
  },
  submitSomalia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Somalia')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Somalia')
			.setValue('@placeOfBirth', 'Mogadishu')
			.click('@saveAndContinue');
  },
  submitsouthAfrica: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'South Africa')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'South Africa')
			.setValue('@placeOfBirth', 'Cape Town')
			.click('@saveAndContinue');
  },
  submitTanzania: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Tanzania, United Republic of')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Tanzania, United Republic of')
			.setValue('@placeOfBirth', 'Dar es Salaam')
			.click('@saveAndContinue');
  },
  submitTurkmenistan: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Turkmenistan')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Turkmenistan')
			.setValue('@placeOfBirth', 'Manila')
			.click('@saveAndContinue');
  },
  submitUAE: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'United Arab Emirates')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'United Arab Emirates')
			.setValue('@placeOfBirth', 'Dubai')
			.click('@saveAndContinue');
  },
  submitUSA: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'United States of America')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '2010')
			.setValue('@countryOfBirth', 'United States of America')
			.setValue('@placeOfBirth', 'Kansas City')
			.click('@saveAndContinue');
  },
  submitZambia: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Zambia')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Zambia')
			.setValue('@placeOfBirth', 'Lusaka')
			.click('@saveAndContinue');
  },
  submitZimbabwe: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Zimbabwe')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Zimbabwe')
			.setValue('@placeOfBirth', 'Harare')
			.click('@saveAndContinue');
  },
  submitNonCescChild: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Taiwan')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '2010')
			.setValue('@countryOfBirth', 'Taiwan')
			.setValue('@placeOfBirth', 'Taipei')
			.click('@saveAndContinue');
  },
  submitCesc: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Turkey')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Turkey')
			.setValue('@placeOfBirth', 'Istanbul')
			.click('@saveAndContinue');
  },
  submitCescIE8: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.click('select[id="nationalityRefs_0"] option[value="TUR"]')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')

  },
  submitNonCesc: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@body', 1000)
			.setValue('@nationality', 'Taiwan')
			.setValue('@dateOfBirth', '17')
			.setValue('@monthOfBirth', '08')
			.setValue('@yearOfBirth', '1988')
			.setValue('@countryOfBirth', 'Taiwan')
			.setValue('@placeOfBirth', 'Taipei')
			.click('@saveAndContinue');
  }
};

module.exports = {
  commands: [birthDetailsCommands],
	elements: {
		body: 'body',
		nationalityIE8: {
			selector: '/html/body/main/section/section/div[1]/form/div/div[1]/div/div[1]/select',
			locateStrategy: 'xpath'
		},
		nationality: {
			selector: 'input[id=nationalityRefs_0_ui]'
		},
		dateOfBirth: {
			selector: 'input[id=dateOfBirth_day]'
		},
		monthOfBirth: {
			selector: 'input[id=dateOfBirth_month]'
		},
		yearOfBirth: {
			selector: 'input[id=dateOfBirth_year]'
		},
		countryOfBirth: {
			selector: 'input[id=countryOfBirthRef_ui]'
		},
		countryOfBirthIE8: {
			selector: 'select[id=countryOfBirthRef]'
		},
		placeOfBirth: {
			selector: 'input[id=placeOfBirth]'
		},
    saveAndContinue: {
        selector: 'input[id=submit]'
    },
	},
};