export class Payment {
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
        return `${this.client} is owed $${this.amount} for ${this.details}`;
    }
}


