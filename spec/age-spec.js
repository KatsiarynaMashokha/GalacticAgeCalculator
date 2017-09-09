import { Age } from './../js/calculator.js';

describe('Age', function() {

  it('should calculate exact human age in years', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 4, [3,4]);
    let yearsAge = userAge.calculateExactHumanAgeInYears();
    expect(yearsAge).toEqual(27.1);
  });

  it('should convert human age to Mercury age', function() {
      let userAge = new Age(650790000000, 1504918624657, 0, 4, [3,4]);
    let mercuryAge = userAge.convertToMercuryAge();
    expect(mercuryAge).toEqual(112.9);
  });

  it('should convert human age to Venus age', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 4, [3,4]);
    let venusAge = userAge.convertToVenusAge();
    expect(venusAge).toEqual(43.7);
  });

  it('should convert human age to Mars age', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 4, [3,4]);
    let marsAge = userAge.convertToMarsAge();
    expect(marsAge).toEqual(14.4);
  });

  it('should convert human age to Jupiter age', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 4, [3,4]);
    let jupiterAge = userAge.convertToJupiterAge();
    expect(jupiterAge).toEqual(2.3);
  });

  it('should calculate life longevity', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 4, [-3,4]);
    let approximateAge = userAge.calculateLifeExpectancy();
    expect(approximateAge).toEqual(75);
  });





});
