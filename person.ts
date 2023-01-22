import exp from "constants";

export class Person {
  //Declare a field to represent a presonality
  public personality!: string;

  constructor() {
    this.personality = "Mystrey";
  }

  public askQuestion(answer: number) {
    if (answer == 1) {
      this.personality = "Extrovert";
    } else if (answer == 2) {
      this.personality = "Introvert";
    } else {
      return "Your personaility is Mystrey";
    }
  }

  // this method return the value of the personality

  getPersonality() {
    return this.personality;
  }
}
export {};
