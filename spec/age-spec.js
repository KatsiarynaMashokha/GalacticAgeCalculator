import { Age } from './../js/calculator.js';

describe('Age', function() {
  it('should convert human age to Mercury age', function() {
    let userAge = new Age(24);
    let mercuryAge = userAge.convertToMercuryAge();
    console.log("m.age is " + mercuryAge);
    expect(mercuryAge).toEqual(100);
  });



});
