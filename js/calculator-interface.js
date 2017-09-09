import { Age } from './../js/calculator.js';

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    let currentTime = new Date().getTime();
    let userBd = (new Date($('#age').val())).getTime();
    let genderValue = $('input[name="gender"]:checked').val();
    let continentValue = $('#location').val();
    let answers = [];
    $("input:checkbox[name=characteristics]:checked").each(function(){
      answers.push($(this).val());
    });

    let userAge = new Age(userBd, currentTime, genderValue, continentValue, answers);

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
