import { Invoice } from './modules/Invoice.js';
import { Payment } from './modules/Payment.js';
import { ListTemplate } from './modules/ListTemplate.js';
// creating class objects
const invOne = new Invoice('sam', 'for the cab service', 30);
const invTwo = new Invoice('jane', 'for the plumbing service', 50);
console.log(invOne, invTwo);
// access form from index.html page
const form = document.querySelector('.new-item-form');
// access form elements
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add event listener to button
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // doc is common object, it can be Invoice or Payment. 
    // You can also create interface (instead of any) for doc object.
    // here end means add element at the end of the list.
    list.render(doc, type.value, 'end');
});
