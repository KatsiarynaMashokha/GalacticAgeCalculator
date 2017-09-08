import { Age } from './../js/calculator.js';

describe('Age', function() {
  it('should convert human age to Mercury age', function() {
    let userAge = new Age(24);
    let mercuryAge = userAge.convertToMercuryAge();
    console.log("m.age is " + mercuryAge);
    expect(mercuryAge).toEqual(100.0);
  });

  it('should convert human age to Venus age', function() {
    let userAge = new Age(24);
    let venusAge = userAge.convertToVenusAge();

    console.log("m.age is " + venusAge);
    expect(venusAge).toEqual(38.7);
  });



});
