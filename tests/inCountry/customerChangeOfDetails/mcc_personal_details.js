module.exports = {
  'MCC Personal Details' : function (client) {
	var startPage = client.page.customerChangeOfDetails();
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

	var immigrationApplicationCurrentlyInProgress = client.page.immigrationApplicationCurrentlyInProgress();
	immigrationApplicationCurrentlyInProgress.submitInProgress();

	var identityNameList = client.page.identityNameList();
	identityNameList.submitMCC();

	var identityGenderRelationship = client.page.identityGenderRelationship();
	identityGenderRelationship.submit();

	var birthDetails = client.page.birthDetails();
	birthDetails.submit();

	var emailAddress = client.page.emailAddress();
	emailAddress.submit();

	var visaOrLeave = client.page.visaOrLeave();
	visaOrLeave.submit();

	var hasTravelDocument = client.page.hasTravelDocument();
	hasTravelDocument.submit();

	var travelDocumentIssueDetails = client.page.travelDocumentIssueDetails();
	travelDocumentIssueDetails.submit();

	var brp = client.page.brp();
	brp.submit();

	var detailsToChange = client.page.detailsToChange();
	detailsToChange.submitPersonalDetails();

	var changeOfPersonalDetails = client.page.changeOfPersonalDetails();
	changeOfPersonalDetails.submitChangeAllPersonalDetails();

	var dateOfChangePersonalDetails = client.page.dateOfChangePersonalDetails();
	dateOfChangePersonalDetails.submit();

	var application = client.page.application();
	application.submit();

	var requiredDocuments = client.page.requiredDocuments();
	requiredDocuments.submitMCC_PersonalDetails();

	var inCountryDeclaration = client.page.inCountryDeclaration();
	inCountryDeclaration.submitApplicant();

	var serviceOption = client.page.serviceOption();
	serviceOption.submitMCC();

	client.end();

	}
};