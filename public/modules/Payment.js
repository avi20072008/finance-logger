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
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["RED"] = 0] = "RED";
    ResourceTypes[ResourceTypes["GREEN"] = 1] = "GREEN";
    ResourceTypes[ResourceTypes["BLUE"] = 2] = "BLUE";
})(ResourceTypes || (ResourceTypes = {}));
let color = ResourceTypes.BLUE;
