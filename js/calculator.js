export class Age{
  constructor(age, currentTime, gender, continent, answers) {
    this.age = age;
    this.currentTime = currentTime;
    this.gender = gender;
    this.continent = continent;
    this.answers = answers;
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

  calculateLifeExpectancy() {
     const baseAge = 70;
     let answersSum = 0;
     for (let i = 0; i < this.answers.length; i++) {
       answersSum += this.answers[i];
     }
     return baseAge + answersSum + this.gender + this.continent;
  }

  calculateYearsLeftOnMercury() {
    let yearsLeft = this.calculateLifeExpectancy() - this.calculateExactHumanAgeInYears();
    if (yearsLeft <= 0) {
      return 'who knows how many';
    }
    return parseFloat((yearsLeft / 0.24).toFixed(1));
  }

  calculateYearsLeftOnVenus() {
    let yearsLeft = this.calculateLifeExpectancy() - this.calculateExactHumanAgeInYears();
    if (yearsLeft <= 0) {
      return 'some';
    }
    return parseFloat((yearsLeft / 0.62).toFixed(1));
  }

  calculateYearsLeftOnMars() {
    let yearsLeft = this.calculateLifeExpectancy() - this.calculateExactHumanAgeInYears();
    if (yearsLeft <= 0) {
      return 'who knows how many';
    }
    return parseFloat((yearsLeft / 1.88).toFixed(1));
  }

  calculateYearsLeftOnJupiter() {
    let yearsLeft = this.calculateLifeExpectancy() - this.calculateExactHumanAgeInYears();
    if (yearsLeft <= 0) {
      return 'some';
    }
    return parseFloat((yearsLeft / 11.86).toFixed(1));
  }

}
