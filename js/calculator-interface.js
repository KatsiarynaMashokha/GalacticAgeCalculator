import { Age } from './../js/calculator.js';

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    let currentTime = new Date().getTime();
    let userBd = (new Date($('#age').val())).getTime();
    let genderValue = parseInt($('input[name="gender"]:checked').val());
    let continentValue = parseInt($('#location').val());
    let answers = [];
    $("input:checkbox[name=characteristics]:checked").each(function(){
      answers.push(parseInt($(this).val()));
    });

    let userAge = new Age(userBd, currentTime, genderValue, continentValue, answers);
    console.log(answers);

    let mercuryAge = userAge.convertToMercuryAge();
    let venusAge = userAge.convertToVenusAge();
    let marsAge = userAge.convertToMarsAge();
    let jupiterAge = userAge.convertToJupiterAge();

    let leftMercury = userAge.calculateYearsLeftOnMercury();
    let leftVenus = userAge.calculateYearsLeftOnVenus();
    let leftMars = userAge.calculateYearsLeftOnMars();
    let leftJupiter = userAge.calculateYearsLeftOnJupiter();

    $('.age-stats').show();
    $('#mercuryAge').text(mercuryAge);
    $('#venusAge').text(venusAge);
    $('#marsAge').text(marsAge);
    $('#jupiterAge').text(jupiterAge);

    $('#mercuryExp').text(leftMercury);
    $('#venusExp').text(leftVenus);
    $('#marsExp').text(leftMars);
    $('#jupiterExp').text(leftJupiter);
  });
});
