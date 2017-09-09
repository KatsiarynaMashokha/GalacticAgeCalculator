import { Age } from './../js/calculator.js';

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    let currentTime = new Date().getTime();
    let userBd = (new Date($('#age').val())).getTime();
    let userAge = new Age(userBd, currentTime);

    let mercuryAge = userAge.convertToMercuryAge();
    let venusAge = userAge.convertToVenusAge();
    let marsAge = userAge.convertToMarsAge();
    let jupiterAge = userAge.convertToJupiterAge();


    $('.age-stats').show();
    $('#mercuryAge').text(mercuryAge);
    $('#venusAge').text(venusAge);
    $('#marsAge').text(marsAge);
    $('#jupiterAge').text(jupiterAge);




  });
});

