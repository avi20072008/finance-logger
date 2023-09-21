export class Invoice {
    client: string;
    details: string;
    amount: number;

    //create constructor
    constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}