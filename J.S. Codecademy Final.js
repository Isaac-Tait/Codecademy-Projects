const canIVote = age => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
//Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’ if the two strings are the same
//and ‘You disagree!’ if the two strings are different.
//My work
const agreeOrDisagree = question1('tenkara') + question2('kebari') => {
  if (question1 === 'tenkara' && question2 === 'kebari'){
    return true
  } else {
      return false
  }

}
// Codecademy answer
const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}

//Write a function, lifePhase(), that takes in a person’s age, as a number, and returns
//which phase of life they are in.
//My work
const lifePhase = age =>{
  switch (age) {
    case 0-3:
    return "Baby"
      break;
    case 4-12:
    return "Child"
      break;
    case 13-19:
    return "Teenager"
      break;
    case 20-64:
    return "Adult"
      break;
    case 65-140:
    return "Senior citizen"
      break;
    default: "This is not a valid age"
  }
}
// Codecademy solution
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
//Write a function, finalGrade(). It should:
//take three arguments of type number
//find the average of those three numbers
//return the letter grade (as a string) that the average corresponds to
//return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// My work

const finalGrade = (grade1, grade2, grade3) =>{
  if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
    return "You have entered an invalid grade"
  }
 else {average = ((grade1 + grade2 + grade3)/3)};
 if average >= 0 && average >=59 {
   return 'F'
 }
 if average >= 60 && average >=69 {
   return 'D'
 }
 if average >= 70 && average >=79 {
   return 'C'
 }
 if average >= 80 && average >=89 {
   return 'B'
 }
 if average >= 90{
   return 'A'
 }
}
console.log(finalGrade(80,95,100));
// Codecademy work
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
//Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
//and returns a string in the following format: ‘rank lastName reporting for duty!’
//My work
const reportingForDuty = ('','') => {
}
console.log(reportingForDuty(private , fido));
//Codecademy solution
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

//Fix the following code:
const rollTheDice = () => {
  let die1 = Math.random() * 6 + 1
    let die2 = Math.random() * 6 + 1
    return die1 + die2
}
//solution
const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
//Write a function, calculateWeight(). It should:
//have two parameters: earthWeight and planet
//expect earthWeight to be a number
//expect planet to be a string
//return a number representing what that Earth-weight would equate to on the planet passed in.
//My work
const calculateWeight = (earthWeight, planet) => {
  if planet = ('Mercury', 'Venus', 'Mars', 'Jupiter', or 'Saturn')
  return "You have chosen a correct planet"; {
  }
  switch (planet) {
    case 'Venus'
    return Your weight on Venus is: (earthWeight * 0.907)

    case 'Mars'
    return Your weight on Mars is: (earthWeight * 0.377)

    case 'Jupiter'
    return Your weight on Mars is: (earthWeight * 2.36)

    case 'Saturn'
    return Your weight on Saturn is: (earthWeight * 0.916)

    default: 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}
//Codecademy solution
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
//A person’s number of imaginary friends are always 33% of their total friends.
//Write a function, numImaginaryFriends(), that takes in the total number of friends a
//person has and returns the number of imaginary friends they have.
//Since friends can only come in whole numbers, be sure to round your result before returning it.
//My Work
const numImaginaryFriends = () => {
let friend = Math.round() * 0.33;
}

console.log friend (4.4);
//Codecademy solution
const numImaginaryFriends = totalFriends => Math.round(totalFriends * .33)
//Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks
//filled in by the arguments passed into the function:
//My work (I got it right!)
const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
//Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is
//currently that age was (or will be) during that year
//My work
const yearDifference = year - theCurrentYear;
const newAge = age + yearDifference {
  if newAge <= 0 {
    return `The year ${theCurrentYear} was ${yearDifference} years before you were born`
  }
}
//Codecademy's solution is written as a function expression and uses string interpolation, but it would be equally
//acceptable to use a function declaration and/or string concatenation

const howOld = (age, year) => {
// The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
// It is totally ok if your function used the current year directly!
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}
//Fix the following code:

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
//added the following
        break;
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
//added the following
                break;
    }
//Codecademy's solution is:
//238:27 the sign should be > not <
    if (percentSharedDNA < 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//added the following
                break;
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
//added the following
                break;
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
//added the following
                break;
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
//added the following
                break;
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

//reate a function, tipCalculator(), that has two parameters,
//a string representing the quality of the service received and a number representing the total cost.
//My work
const tipCalculator = (quality, cost) => {
  tipCalculator('bad', 100)
  tipCalculator('ok', 100)
  tipCalculator('good', 100)
  tipCalculator('good', 100){

    switch (quality) {
        case 'bad':
            return cost * 0.5;
        case 'ok':
            return cost * 0.15;
        case 'good':
            return cost * 0.20;
        case 'excellent':
            return cost * 0.30;
        default: 'no entry'
            return cost * 0.18
        }
    }
}

const tipCalculator = (quality, cost) => {
    switch (quality) {
        case 'bad':
            return cost * .05;
        case 'ok':
            return cost * .15;
        case 'good':
            return cost * .20;
        case 'excellent':
            return cost * .30;
        default:
            return cost * .18;

    }
}
//Write a function, toEmoticon(), that takes in a string and returns the corresponding
//emoticon as a string. Use a switch/case, and cover these cases:
//'shrug' should return '|_{"}_|'
//'smiley face' should return ':)'
//'frowny face' should return':('
//'winky face' should return ';)'
//'heart' should return '<3'
//any other input should return '|_(* ~ *)_|'
//My Work
const toEmoticon = () => {
  switch (emoticon) {
  case `shrug`;
    return '|_{"}_|';
  case 'smiley face';
    return ':)';
  case 'frowny face';
    return ':(';
  case 'winky face';
    return ';)';
  case 'heart';
    return '<3';
    default
    return '|_(* ~ *)_|'
  }
}
//Codecademy solution
const toEmoticon = meaning => {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}
