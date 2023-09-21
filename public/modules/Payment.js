export class Payment {
    //create constructor
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} is owed $${this.amount} for ${this.details}`;
    }
}
