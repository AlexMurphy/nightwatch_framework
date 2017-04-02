module.exports = {
  'MCC Dependants Details' : function (client) {
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
	immigrationApplicationCurrentlyInProgress.submit();

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
	detailsToChange.submitDependantsDetails();

	var dependantsToChange = client.page.dependantsToChange();
	dependantsToChange.submitPartner();

	var changeDependantPartnerName = client.page.changeDependantPartnerName();
	changeDependantPartnerName.submit();

	var changeDependantPartnerBirthDetails = client.page.changeDependantPartnerBirthDetails();
	changeDependantPartnerBirthDetails.submit();

	var changeDependantPartnerPassport = client.page.changeDependantPartnerPassport();
	changeDependantPartnerPassport.submitDontKnowPartnersPassportNumber();

	var changeDependantPartnerHomeOfficeReferenceNumber = client.page.changeDependantPartnerHomeOfficeReferenceNumber();
	changeDependantPartnerHomeOfficeReferenceNumber.submitDontknowPartnerHomeOfficeNumber();

	var dependantPartnerDetailsToChange = client.page.dependantPartnerDetailsToChange();
	dependantPartnerDetailsToChange.submitNoLongerInARelationship();

	var permissionToUseRelationshipBreakdown = client.page.permissionToUseRelationshipBreakdown();
	permissionToUseRelationshipBreakdown.submitGivePermission();

	var hasChildrenInTheUK = client.page.hasChildrenInTheUK();
	hasChildrenInTheUK.submitChildrenInTheUK();

	var childFromRelationshipWithExPartnerName = client.page.childFromRelationshipWithExPartnerName();
	childFromRelationshipWithExPartnerName.submit();

	var childFromRelationshipWithExPartnerBirthDetails = client.page.childFromRelationshipWithExPartnerBirthDetails();
	childFromRelationshipWithExPartnerBirthDetails.submit();

	var childFromRelationshipWithExPartnerDetails = client.page.childFromRelationshipWithExPartnerDetails();
	childFromRelationshipWithExPartnerDetails.submit();

	var childrenWithExPartnerBlockList = client.page.childrenWithExPartnerBlockList();
	childrenWithExPartnerBlockList.submitNoOtherChildren();

	var application = client.page.application();
	application.submit();

	var requiredDocuments = client.page.requiredDocuments();
	requiredDocuments.submitMCC_Dependants();

	var inCountryDeclaration = client.page.inCountryDeclaration();
	inCountryDeclaration.submitApplicant();

	var serviceOption = client.page.serviceOption();
	serviceOption.submitMCC();

	client.end();

	}
};