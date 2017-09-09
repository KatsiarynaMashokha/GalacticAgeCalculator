export class Age{
  constructor(age, currentTime) {
    this.age = age;
    this.currentTime = currentTime;
  }

  calculateExactHumanAgeInYears() {
    let userBirthday = ((this.currentTime - this.age) / 31556952000).toFixed(1);
    return parseFloat(userBirthday);
  }

  convertToMercuryAge() {
    return parseFloat((this.calculateExactHumanAgeInYears() / 0.24).toFixed(1));
  }

  convertToVenusAge() {
    return parseFloat((this.calculateExactHumanAgeInYears() / 0.62).toFixed(1));
  }

  convertToMarsAge() {
    return parseFloat((this.calculateExactHumanAgeInYears() / 1.88).toFixed(1));
  }

  convertToJupiterAge() {
    return parseFloat((this.calculateExactHumanAgeInYears() / 11.86).toFixed(1));
  }

}
