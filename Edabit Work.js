//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
	if(num % 100 === 0) {
		return true
	} else {
		return false
	}
}

//Create a function that takes two strings as arguments and return either true or false depending on whether
//the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
	if(str1.length === str2.length) {
		return true;
	} else {
		return false;
	}
}

//There is a single operator in JavaScript capable of providing the remainder of a division operation. Two numbers
//are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.
function remainder(x, y) {
	return (x % y);
}

//Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
		return true
	} else {
		return false
	}
}

//Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
	return c.codePointAt();
}

//Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

//Write two functions:
//toInt() : A function to convert a string to an integer.
//toStr() : A function to convert an integer to a string.
