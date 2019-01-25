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
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const picAmount = $('.number').val();
    getDogImage(picAmount);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
