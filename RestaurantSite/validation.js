var firstName = document.forms["contactForm"]["name"];
var emailID = document.forms["contactForm"]["email"];
var phoneNum = document.forms["contactForm"]["phone"];

var nameFlag, emailFlag, phoneFlag = false;
// color
const green = '#4CAF50';
const red = '#F44336';

// validate name
function validateName(){
  //check if empty
  if (firstName.value ===''){
    document.getElementById('nameMessage').innerHTML='Name field must not be empty';
    document.getElementById('nameMessage').style.color = red;
    nameFlag = false;
  }
  //if only has letters
  else if (!(/^[a-zA-Z ]+$/.test(firstName.value))){
    document.getElementById('nameMessage').innerHTML='Name field must contain only letters';
    document.getElementById('nameMessage').style.color = red;
    nameFlag = false;
  }
  else {
    document.getElementById('nameMessage').innerHTML='Valid';
    document.getElementById('nameMessage').style.color = green;
    nameFlag = true;
  }
  validateItems();
}
// validate email
function validateEmail(){
  //check if empty
  if (emailID.value ===''){
    document.getElementById('emailMessage').innerHTML='Email field must not be empty';
    document.getElementById('emailMessage').style.color = red;
    emailFlag = false;
  }
  //if only has letters
  else if (!emailCheck()){
    document.getElementById('emailMessage').innerHTML='Invalid email address';
    document.getElementById('emailMessage').style.color = red;
    emailFlag = false;
  }
  else {
    document.getElementById('emailMessage').innerHTML='Valid';
    document.getElementById('emailMessage').style.color = green;
    emailFlag = true;
  }
  validateItems();
}
// validate phone number
function validatePhone(){
  //check if empty
  if (phoneNum.value ===''){
    document.getElementById('phoneMessage').innerHTML='Phone field must not be empty';
    document.getElementById('phoneMessage').style.color = red;
    phoneFlag = false;
  }
  //if only has letters
  else if (!phoneCheck()){
    document.getElementById('phoneMessage').innerHTML='Invalid phone number';
    document.getElementById('phoneMessage').style.color = red;
    phoneFlag = false;
  }
  else {
    document.getElementById('phoneMessage').innerHTML='Valid';
    document.getElementById('phoneMessage').style.color = green;
    phoneFlag = true;
  }
  validateItems();
}

function validateItems(){
  if (nameFlag && emailFlag && phoneFlag){
    document.getElementById('submit').disabled = false;
  }
  else{
    document.getElementById('submit').disabled = true;
  }
}

// utility function
// checking email pattern
function emailCheck(){
  // email Pattern
  let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailID.value.match(regEx)){
    return true;
  }
  else{
    return false;
  }
}
// checking phone pattern
function phoneCheck(){
  // phone pattern
  let regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;
  if (phoneNum.value.match(regEx)){
    return true;
  }
  else {
    return false;
  }
}

