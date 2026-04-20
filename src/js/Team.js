export default class Team {
    constructor() {
        this.characters = [];
    }

    add(character) {
        this.characters.push(character);
    }


    *[Symbol.iterator]() {

        for (const char of this.characters) {

            yield char;
        }
    }
}