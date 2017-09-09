import { Age } from './../js/calculator.js';

$(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let currentTime = new Date().getTime();
    let userBd = new Date($('#age').val());
    let userAge = new Age(userBd, currentTime);
    //
    //
    // let mercuryAgeNew = convertToMercuryAge();
    // let marsAge = convertToMarsAge();
    // let jupiterAge = convertToJupiterAge();
    //
    // $('#mercuryAge').append(mercuryAgeNew);


  });
});
