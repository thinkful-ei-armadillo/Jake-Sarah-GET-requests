'use strict';

function getDogImage(picAmount) {
  if (picAmount === '') {
    picAmount = 3;
  }
  fetch(`https://dog.ceo/api/breeds/image/random/${picAmount}`) 
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
      
    .catch(error => alert('Something went wrong in else. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const displayDogs = [];
  for(let i = 0; i< responseJson.message.length; i++){
    displayDogs.push(`<img src="${responseJson.message[i]}">`);
  }

  $('.display-all-dogs').html(displayDogs);
  //display the results section
console.log(responseJson.message)

  $('.results').removeClass('hidden');
}


function watchForm() {
  $('.number-form').submit(event => {
    event.preventDefault();
    const picAmount = $('.number').val();
    getDogImage(picAmount);
  });
}

function getDogBreed(dogBreed){
  fetch(`https://dog.ceo/api/breed/hound-${dogBreed}/images/random`)
  //console.log(`https://dog.ceo/api/breeds/hound/images/random`)
  .then(response => response.json())
  .then(responseJson =>
    displayDogBreed(responseJson))
   
  .catch(error => alert('Breed not found.'))

}

function breedForm(){
  $('.breed-form').submit(event => {
    event.preventDefault();
    const dogBreed= $('.dog-breed').val();
    console.log(dogBreed);
    getDogBreed(dogBreed);
  });
}

function displayDogBreed(responseJson){
  const displayBreed =[];
  displayBreed.push(`<img src="${responseJson.message}">`)
  $('.display-all-dogs').html(displayBreed);
  $('.results').removeClass('hidden');
console.log(responseJson.message)
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  breedForm();
});

