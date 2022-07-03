var signup = document.querySelector('#signup');
var deleteForm = document.querySelector('#delete-account');
var card = document.querySelector('#card');

//Input DOM Selection
var imgLink = document.querySelector('#img-link');
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var selectedCountry = document.querySelector('#select-country');
var selectedCity = document.querySelector('#select-city');
var selectedDate = document.querySelector('#select-date'); 

//Output DOM Selection
var cardTitle = document.querySelector('#title');
var img = document.querySelector('img');
var userName = document.querySelector('#userName');
var country = document.querySelector('#country');
var city = document.querySelector('#city');
var dob = document.querySelector('#dob');

document.addEventListener('DOMContentLoaded', function(){
  if(localStorage.getItem('localCard') !== null){
    signup.style.marginLeft = "-500px";
    card.style.opacity = "1";
    
    //Making array from localCard data
    var localData = JSON.parse(localStorage.getItem('localCard')); 
    
    //Setting output values
    cardTitle.innerHTML = "Hello "+localData[1]+" "+localData[2];
    img.setAttribute('src',localData[0] || 'https://bit.ly/2qTQEv9');
    userName.innerHTML = localData[1]+" "+localData[2];
    country.innerHTML = localData[3];
    city.innerHTML = localData[4];
    dob.innerHTML = localData[5];  
  }
});

signup.addEventListener('submit', function(e){
  e.preventDefault();
  signup.style.marginLeft = "-500px";
  card.style.opacity = "1";
  
  //Setting output values
  cardTitle.innerHTML = "Hello "+firstName.value+" "+lastName.value;
  img.setAttribute('src',imgLink.value || 'https://bit.ly/2qTQEv9');
  userName.innerHTML = firstName.value+" "+lastName.value;
  country.innerHTML = selectedCountry.value;
  city.innerHTML = selectedCity.value;
  dob.innerHTML = selectedDate.value;
  
  var storeData = [imgLink.value,firstName.value, lastName.value, selectedCountry.value, selectedCity.value, selectedDate.value];
  localStorage.setItem('localCard',JSON.stringify(storeData));  
});

deleteForm.addEventListener('submit', function(e){
  e.preventDefault();
  signup.style.marginLeft = "0px";
  card.style.opacity = "0";
  localStorage.removeItem('localCard');
  //resetting input values
  imgLink.value = "";
  firstName.value = "";
  lastName.value = "";
  selectedCountry.value = "";
  selectedCity.value = "";
  selectedDate.value = "";
});

