import { userlist } from './db.js';
console.log('Hello JS!');
console.log(userlist[0].name);

const active = true;    //boolean
const age = 22;         //number
const username = 'asd'; //string
const nothing = null;   //null
let price;              //undefined

//Collections
//tomb
const tomb = [1,2,3,4, ['Helo','asd'], 'cs', true];
console.log(tomb[4][1]);
console.log(tomb.length)

//objektum
const settings = {
    url: 'https://localhost:3000',
    devmode: true
//kulcs: érték
}
console.log(settings.url);
const key ='devmode';
console.log(settings[key]);
console.log(age.toFixed(1));
Number.prototype.hello = function(){
    console.log(this);
    console.log('this is the function from zero method');
};
age.hello();
