export class Person {
    //Declare a field to represent a presonality
    personality;
    constructor() {
        this.personality = "Mystrey";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            return "Your personaility is Mystrey";
        }
    }
    // this method return the value of the personality
    getPersonality() {
        return this.personality;
    }
}
