module.exports = {
  'Tier 2 General Student' : function (client) {
	var startPage = client.page.tier2General();
	startPage.navigate()
		.click('@applyNow')

	var applicantLocation = client.page.applicantLocation();
	applicantLocation.submit();

	var legalRep = client.page.legalRep();
	legalRep.submit();

	var contactEmail = client.page.contactEmail();
	contactEmail.submit();

	var start = client.page.start();
	start.submit();

	var inCountryApplication = client.page.inCountryApplication();
	inCountryApplication.submit();

	var identityNameList = client.page.identityNameList();
	identityNameList.submitTier2();

	var contactDetails = client.page.contactDetails();
	contactDetails.submit();

	var identityGenderRelationship = client.page.identityGenderRelationship();
	identityGenderRelationship.submit();

	var birthDetails = client.page.birthDetails();
	birthDetails.submitUAE();

	var hasTravelDocument = client.page.hasTravelDocument();
	hasTravelDocument.submit();

	var travelDocumentIssueDetails = client.page.travelDocumentIssueDetails();
	travelDocumentIssueDetails.submit();

	var currentUKImmigrationStatus = client.page.currentUKImmigrationStatus();
	currentUKImmigrationStatus.submitStudent();

	var currentUKImmigrationStatusDates = client.page.currentUKImmigrationStatusDates();
	currentUKImmigrationStatusDates.submit();

	var requirePoliceRegistration = client.page.requirePoliceRegistration();
	requirePoliceRegistration.submit();

	var brp = client.page.brp();
	brp.submit();

	var nationalInsuranceNumber = client.page.nationalInsuranceNumber();
	nationalInsuranceNumber.submitTier2General();

	var qualificationAtDegreeLevel = client.page.qualificationAtDegreeLevel();
	qualificationAtDegreeLevel.submitbachelorsDegree();

	var qualificationAtDegreeLevelEvidenceDetails = client.page.qualificationAtDegreeLevelEvidenceDetails();
	qualificationAtDegreeLevelEvidenceDetails.submitofficialTranscriptOrLetter();

	var sponsoredStudies = client.page.sponsoredStudies();
	sponsoredStudies.submitNotSponsored();

	// var englishDegree = client.page.englishDegree();
	// englishDegree.submitNoDegree();

	// var englishLanguageTestCertificate = client.page.englishLanguageTestCertificate();
	// englishLanguageTestCertificate.submitNoEnglishTest();

	// var previousVisaEnglishLanguage = client.page.previousVisaEnglishLanguage();
	// previousVisaEnglishLanguage.submitNotProved();

	var publicFunds = client.page.publicFunds();
	publicFunds.submit();

	var criminalConvictionType = client.page.criminalConvictionType();
	criminalConvictionType.submit();

	var warCrimes = client.page.warCrimes();
	warCrimes.submit();

	var terroristActivities = client.page.terroristActivities();
	terroristActivities.submit();

	var terroristOrganisations = client.page.terroristOrganisations();
	terroristOrganisations.submit();

	var terroristViews = client.page.terroristViews();
	terroristViews.submit();

	var sponsorLicence = client.page.sponsorLicence();
	sponsorLicence.submit();

	var sponsorShares = client.page.sponsorShares();
	sponsorShares.submitNotLimited();

	var sponsorCertificate = client.page.sponsorCertificate();
	sponsorCertificate.submit();

	var sponsorCertifyingMaintenance = client.page.sponsorCertifyingMaintenance();
	sponsorCertifyingMaintenance.submit();

	var sponsorEmployment = client.page.sponsorEmployment();
	sponsorEmployment.submit();

	var shortageOccupation = client.page.shortageOccupation();
	shortageOccupation.submitNotInShortage();

	var sponsorEmploymentLength = client.page.sponsorEmploymentLength();
	sponsorEmploymentLength.submitLessThanThree();

	var application = client.page.application();
	application.submit();

	var application = client.page.application();
	application.submit();

	var maintenanceEvidenceDetailsList = client.page.maintenanceEvidenceDetailsList();
	maintenanceEvidenceDetailsList.submit();

	var requiredDocuments = client.page.requiredDocuments();
	requiredDocuments.submitTier2GeneralStudent();

	var documents = client.page.documents();
	documents.submit();

	// var inCountryDeclaration = client.page.inCountryDeclaration();
	// inCountryDeclaration.submitApplicant();

	// var ihs = client.page.ihs();
	// ihs.submitGotIHS();

	// var serviceOption = client.page.serviceOption();
	// serviceOption.submitTier2General_Student();

	// var fee = client.page.fee();
	// fee.submit();

	// var card = client.page.card();
	// card.submit();

	// var cardSTSimulator = client.page.cardSTSimulator();
	// cardSTSimulator.submit();


	// client.end();
 	
 	}

};