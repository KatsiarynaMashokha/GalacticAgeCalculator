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

  it('should calculate how many years are left to live on Mercury', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 6, [-3,10]);
    let mercLeft = userAge.calculateYearsLeftOnMercury();
    expect(mercLeft).toEqual(232.9);
  });

  it('should calculate how many years are left to live on Venus', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 6, [-3,10]);
    let venusLeft = userAge.calculateYearsLeftOnVenus();
    expect(venusLeft).toEqual(90.2);
  });

  it('should calculate how many years are left to live on Mars', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 6, [-3,10]);
    let marsLeft = userAge.calculateYearsLeftOnMars();
    expect(marsLeft).toEqual(29.7);
  });

  it('should calculate how many years are left to live on Jupiter', function() {
    let userAge = new Age(650790000000, 1504918624657, 0, 6, [-3,10]);
    let jupiterLeft = userAge.calculateYearsLeftOnJupiter();
    expect(jupiterLeft).toEqual(4.7);
  });

  it('should calculate how many years are left to live on Mercury if the current age exceed the longevity', function() {
    let userAge = new Age(-2818275359000, 1504918624657, 0, 6, [-3,10]);
    let mercuryLeft = userAge.calculateYearsLeftOnMercury();
    expect(mercuryLeft).toEqual('who knows how many');
  });
});
