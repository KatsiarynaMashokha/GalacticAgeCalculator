import { Age } from './../js/calculator.js';

$(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userAge = new Age($('#age').val());
    let mercuryAge = convertToMercuryAge();
    let marsAge = convertToMarsAge();
    let jupiterAge = convertToJupiterAge();


  });
});
