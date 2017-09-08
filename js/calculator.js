export class Age{
  constructor(age) {
    this.age = age;
  }

  convertAgeToSeconds() {
    return this.age * 365 * 24 * 60 * 60;
  }


  convertToMercuryAge() {
    return parseFloat((this.age / 0.24).toFixed(1));
  }

  convertToVenusAge() {
    return parseFloat((this.age / 0.62).toFixed(1));
  }

  convertToMarsAge() {
    return parseFloat((this.age / 1.88).toFixed(1));
  }

  convertToJupiterAge() {
    return parseFloat((this.age / 11.86).toFixed(1));
  }
}
