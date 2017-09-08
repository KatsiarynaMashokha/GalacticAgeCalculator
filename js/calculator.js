export class Age{
  constructor(age) {
    this.age = age;
  }

  convertToMercuryAge(age) {
    return parseFloat((this.age / 0.24).toFixed(1));
  }

  convertToVenusAge(age) {
    return parseFloat((this.age / 0.62).toFixed(1));
  }

  convertToMarsAge(age) {
    return parseFloat((this.age / 1.88).toFixed(1));
  }

  convertToJupiterAge(age) {
    return parseFloat((this.age / 11.86).toFixed(1));
  }
}
