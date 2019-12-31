/*
* Conditionals, Functions, Scope and loops.
*/
/*...*/

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
	let squared = number * number;
	let subed = number - 19;
}

let squaredNumber = squareNum(10);
console.log(squaredNumber);