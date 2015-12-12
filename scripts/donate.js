var value;
var radios = document.forms['donation'].elements['donate'];
// var radioForm = document.getElementById('donation');
//var billingForm = document.getElementById('paymentInfo');
// var cbox1 = '#cbox1')
var information = [];

var getData = localStorage.getItem('billingInformation');
var getDataParsed = JSON.parse(getData);
if (localStorage.billingInformation) {
  information = getDataParsed;
};

var formIds = {
  creditNum: $('#cred'),
  first: $('#first'),
  last: $('#last'),
  phone: $('#phone'),
  email: $('#email'),
  address: $('#address'),
  city: $('#city'),
  state: $('#state'),
  zip: $('#zip')
};
$('#donation input').on('click', function(){
  if(this === $('#label7') ){
    showInput();
  }
  else{
    value = parseInt(this.value);
    console.log(value);
    // hideInput();
  }
});

//http://jsfiddle.net/T7gE7/4/     ~source sorta
// var hideInput = function() {

  // var empty = document.getElementById('empty');
  // var field = document.getElementById('hidden');
  // $('.hidden').attr('display', 'none');//.style.display = 'none';
  // $('#empty').attr('display', 'none');//.style.display = 'none';
// };

// var showInput = function() {
//   document.getElementById('hidden').style.display = 'inline';
// };
//get info from forms
var Billing = function (creditNum, ccv, firstName, lastName, phone, email, address, city, state, zip) {
  this.creditNum = creditNum;
  this.ccv = ccv;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  information.push(this);
};


var handleCheck = function(checkbox) {
  if ($('#cbox1').checked) {
    for (var i = 0; i < information.length; i++) {
      if (formIds.creditNum.value === information[i].creditNum) {
        formIds.first.value = information[i].firstName;
        formIds.last.value =information[i].lastName;
        formIds.phone.value = information[i].phone;
        formIds.email.value = information[i].email;
        formIds.address.value = information[i].address;
        formIds.city.value = information[i].city;
        formIds.state.value = information[i].state;
        formIds.zip.value = information[i].zip;
      }
    }
  }
};

var handleBilling = function (event) {
  event.preventDefault();
    // var value = $('#donation').val();
  if ((!event.target.credit.value) || (!event.target.ccv.value) || (!event.target.firstName.value) || (!event.target.lastName.value) || (!event.target.phoneNumber.value) || (!event.target.email.value) || (!event.target.address.value) || (!event.target.city.value) || (!event.target.state.value) || (!event.target.zip.value)) {
    return alert('Please Fill All Fields');
  }
  if (value === undefined) {
    return alert('Please select a donation amount');
  }
  // console.log(value);

  var credit = event.target.credit.value;
  var ccv = event.target.ccv.value;
  var first = event.target.firstName.value;
  var last = event.target.lastName.value;
  var number = event.target.phoneNumber.value;
  var email = event.target.email.value;
  var add = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zip = event.target.zip.value;

  if ($('#cbox1').checked === false) {
    var newBilling = new Billing(credit, ccv, first, last, number, email, add, city, state, zip);
    var toLocal = JSON.stringify(information);
    localStorage.setItem('billingInformation', toLocal);
    console.log(credit + 'is your credit card number');
  }

  var hideForms = function() {
    var box = document.getElementById('giftForms');
    var gifts = document.getElementById('gifts');
    gifts.style.display = 'none';
    box.style.display = 'none';
  };

  var response = function() {
    var giftPic = document.createElement('img');
    var greeting = document.createElement('h3');
    var position = document.getElementById('empty');
    giftPic.src = 'http://thenewswheel.com/wp-content/uploads/2015/01/ron-swanson-630x345.png';
    greeting.textContent = ' Thank you ' + first + ', for the donation of $' + value + ', your gift of equal value will arrive in 6-8 weeks. Remember to vote for me on November fourth. Or don\'t. I don\'t care. ~ Ron';
    position.appendChild(giftPic);
    position.appendChild(greeting);
    position.style.display = 'block';
  };
  hideForms();
  response();
};
/// this sets other amount button'

var handleRadio = function(event){
  event.preventDefault();
  var other = event.target.otherAmount.value;
  value = parseInt(other);
  console.log(value);
  // showInput();
  // $('.hidden').toggleClass();
  //  hideInput();
  var newLabel = document.getElementById('span');
  newLabel.textContent ='$' + value;
};

// hideInput();

$('#donation').on('submit', handleRadio);
$('#paymentInfo').on('submit', handleBilling);
$('#cbox1').on('click', handleCheck);
