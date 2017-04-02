module.exports = {
	tags: ['Transfer', 'TOC', 'Premium', 'NoIHS', 'Browserstack'],
  'TOC with non cesc nationality and additional payment' : function (client) {
    client
      .url(client.launch_url + "/product/premium-service-appointment-booking")
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('.button', 1000)
			.click('.button')
			.assert.containsText('#editInformation', "Your location")
			.waitForElementVisible('#isUk_true', 1000)
			.click('#isUk_true')
			.click('#submit')

		var contactEmail = client.page.contactEmail();
		contactEmail.submit()

			//application type page
			.waitForElementVisible('body', 10000)
			.assert.containsText('#editInformation', "Your application type")
			.click('#applicationCategory_transferOrReplacement')
			.click('#applicationType_toc')
			.click('.button')

		var start = client.page.start();
		start.submit()

		var inCountryApplication = client.page.inCountryApplication();
		inCountryApplication.submit();

		var identityNameList = client.page.identityNameList();
		identityNameList.submitPSAB();

		var telephoneDetails = client.page.telephoneDetails();
		telephoneDetails.submit();

		var birthDetails = client.page.birthDetails();
		birthDetails.submitNonCesc();

		var passportNumberDetails = client.page.passportNumberDetails();
		passportNumberDetails.submit();

		var application = client.page.application();
		application.submit();

		var application = client.page.application();
		application.submit();

		var serviceOption = client.page.serviceOption();
		serviceOption.submitPSAB();

		var appointmentCentreSelection = client.page.appointmentCentreSelection();
		appointmentCentreSelection.submit();

		client.url(function (response) {
		  if (response.value === "https://visas-immigration.service.gov.uk/next") {
			client.terminate();
		  }
		});

		client.url(function (response) {
		  if (response.value === "https://preproduction.dcj.ipt.homeoffice.gov.uk/next") {
			client.terminate();
		  }
		});

		var appointmentBooking = client.page.appointmentBooking();
		appointmentBooking.assert();

		client.useXpath();
		client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[1]/a','class', function (result) {
			if (result.value === 'day-appointments-available') {
				client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[1]/a')
			} else client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[2]/a','class', function (result) {
			if (result.value === 'day-appointments-available') {
				client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[2]/a')
			} else client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[3]/a','class', function (result) {
							if (result.value === 'day-appointments-available') {
								client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[3]/a')
			} else client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[4]/a','class', function (result) {
							if (result.value === 'day-appointments-available') {
								client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[4]/a')
			} else client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[5]/a','class', function (result) {
							if (result.value === 'day-appointments-available') {
								client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[5]/a')
			} else client.getAttribute('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[6]/a','class', function (result) {
							if (result.value === 'day-appointments-available') {
								client.click('/html/body/main/section/section/div[1]/form/div[2]/div[2]/table/tbody/tr/td[6]/a')
			} 
	});	

	});	

	});	

	});	

	});

	});

	client.useCss();
	client.waitForElementVisible('.inner', 10000);

	client.useXpath();
	client.click('/html/body/main/section/section/div[1]/form/div[2]/div[3]/div[2]/div/div[1]/ul/li[1]');

	client.useCss();
	client.click('.button');

		var fee = client.page.fee();
		fee.submit();

		var card = client.page.card();
		card.submit();

		var cardSTSimulator = client.page.cardSTSimulator();
		cardSTSimulator.submit();

		var paymentConfirmation = client.page.paymentConfirmation();
		paymentConfirmation.assertTOC_Premium();

		var nextSteps = client.page.nextSteps();
		nextSteps.assertPremium();

	client.end();

	}
};