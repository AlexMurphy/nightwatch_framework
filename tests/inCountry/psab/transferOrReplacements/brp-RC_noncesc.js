module.exports = {
	tags: ['Transfer', 'BRP', 'NoIHS'],
  'BRP(RC) with non cesc nationality' : function (client) {
		var startPage = client.page.premiumServiceAppointmentBooking();
		startPage.navigate()
			.click('@applyNow')
			
		var applicantLocation = client.page.applicantLocation();
		applicantLocation.submit();

		var contactEmail = client.page.contactEmail();
		contactEmail.submit()

		var premiumServiceAppointmentBookingApplicationType = client.page.premiumServiceAppointmentBookingApplicationType();
		premiumServiceAppointmentBookingApplicationType.submitBRP()

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
	client.click('/html/body/main/section/section/div[1]/form/div[2]/div[3]/div[2]/div/div/ul/li[7]');

	client.useCss();
	client.click('.button');

		var fee = client.page.fee();
		fee.submit();

		var card = client.page.card();
		card.submit();

		var cardSTSimulator = client.page.cardSTSimulator();
		cardSTSimulator.submit();

		var paymentConfirmation = client.page.paymentConfirmation();
		paymentConfirmation.assertBRP();

	client.end();

	}
};