var a = "42";
var b = (a);

/* console.log( a );
console.log( b ); */

var TAX_RATE = 0.0825;
var amount = 95;
var amount = amount * 2;

// console.log(amount);
amount = amount + (amount * TAX_RATE);
amount = '$' + (amount);

console.log(amount);
console.log(Number(amount).toFixed(2));




