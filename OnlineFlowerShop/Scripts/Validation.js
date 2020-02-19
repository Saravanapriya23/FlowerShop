var isValidSecurity = false;
var isValidName = false;
var isValidAddress = false;
var isValidCity = false;
var isValidMail = false;
var isValidPin = false;
var isValidCard = false;
function ValidateCardNumber() {                                       //Function is to validate the value in the cardnumber textbox
	var cardnum = document.getElementById("txtCardNumber").value;
	var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
	var cardNumber = regex.test(cardnum);
	if (cardNumber) {
		document.getElementById("Valid").style.display = "none";
		isValidCard=true;
	}
	else {
		document.getElementById("Valid").style.display = "block";
		isValidCard=false;
	}
}
function ValidateSecurityCode() {                                         //Function is to validate the value in the security code textbox
	var security = document.getElementById("txtSecurityCode").value;
	var regex = /^[0-9]{3}$/;
	var securityNumber = regex.test(security);
	if (securityNumber) {
		document.getElementById("ValidSecurity").style.display = "none";
		isValidSecurity=true;
	}
	else {
		document.getElementById("ValidSecurity").style.display = "block";
		isValidSecurity=false;
	}
}
function ValidateName() {                                                     //Function is to validate the value in the cardHolderName textbox
	var userName = document.getElementById("txtName").value;
	var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var cardHolderName = regex.test(userName);
	if (cardHolderName) {
		document.getElementById("ValidName").style.display = "none";
		isValidName=true;
	}
	else {
		document.getElementById("ValidName").style.display = "block";
		isValidName=false;
	}
}
function ValidateAddress1() {                                                     //Function is to validate the value in the Address1 textbox

	var address = document.getElementById("txtAddress1").value;
	var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var validAddress = regex.test(address);
	if (validAddress) {
		document.getElementById("ValidAddress").style.display = "none";
		isValidAddress=true;
	}
	else {
		document.getElementById("ValidAddress").style.display = "block";
		isValidAddress=false;
	}
}


function ValidateAddress2() {                                                     //Function is to validate the value in the Address2 textbox
	var address = document.getElementById("txtAddress2").value;
	var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var validAddress = regex.test(address);
	if (validAddress) {
		document.getElementById("ValidAddress").style.display = "none";
		isValidAddress=true;
	}
	else {
		document.getElementById("ValidAddress").style.display = "block";
		isValidAddress=false;
	}
}
function ValidateAddress3() {                                                   //Function is to validate the value in the Address3 textbox
	var address = document.getElementById("txtAddress3").value;
	var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var validAddress = regex.test(userName);
	if (validAddress) {
		document.getElementById("ValidAddress").style.display = "none";
		isValidAddress=true;
	}
	else {
		document.getElementById("ValidAddress").style.display = "block";
		isValidAddress=false;
	}
}
function ValidateCity() {                                                      //Function is to validate the value in the city textbox
	var city = document.getElementById("txtCity").value;
	var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var validCity = regex.test(city);
	if (validCity) {
		document.getElementById("ValidTown").style.display = "none";
		isValidCity=true;
	}
	else {
		document.getElementById("ValidTown").style.display = "block";
		isValidCity=false;
	}
}


function ValidateRegion() {                                                     //Function is to validate the value in the region textbox
	var region = document.getElementById("txtRegion").value;
	var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	var validRegion = regex.test(region);
	if (validRegion)  {
		document.getElementById("validRegion").style.display = "none";
	}
	else {
		document.getElementById("validRegion").style.display = "block"
	}
}
function ValidatePin() {                                                     //Function is to validate the value in the pincode textbox
	var pin = document.getElementById("txtPostcode").value;
	var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
	var validPin = regex.test(pin);
	if (validPin) {
		document.getElementById("ValidPin").style.display = "none";
		isValidPin=true;
	}
	else {
		document.getElementById("ValidPin").style.display = "block";
		isValidPin=false;
	}
}
function ValidatePhone() {                                                        //Function is to validate the value in the phonenumber textbox
	var phone = document.getElementById("txtTelephone").value;
	var regex = /^[6789]\d{9}$/;
	var validPhone = regex.test(phone);
	if (validPhone) {
		document.getElementById("validPhone").style.display = "none";
	}
	else {
		document.getElementById("validPhone").style.display = "block"
	}
}
function ValidateMail() {                                                     //Function is to validate the value in the Email textbox
	var mail = document.getElementById("txtEmail").value;
	var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
	var validMail = regex.test(mail);
	if (validMail) {
		document.getElementById("ValidMail").style.display = "none";
		isValidMail=true;
	}
	else {
		document.getElementById("ValidMail").style.display = "block";
		isValidMail=false;
	}
}

function Submit() {
    ValidateCardNumber();
    ValidateName();
    ValidateSecurityCode();
    ValidatePin();
    ValidateMail();
    ValidateAddress1();
    ValidateCity();
    if (isValidAddress && isValidCity && isValidName && isValidPin && isValidSecurity && isValidMail && isValidCard) {
        alert("Successfully registered")
    }
}
