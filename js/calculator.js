export class Age{
  constructor(age) {
    this.age = age;
  }

  convertToMercuryAge(age) {
    return (this.age / 0.24);
  }
}
