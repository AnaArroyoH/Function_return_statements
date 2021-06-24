//Checking if a number is big:
const bigNumber = function (number) {
    if (number > 100) {
        return true;
    } return false;
}

// console.log(bigNumber(54));
console.log(bigNumber(101));

//Bouncer at a club:
const brendaBouncerBot = function ([age, peopleInside]) {
    if (age < 18) {
        return 'this is a club for adults';
    } else if (peopleInside > 100) {
        return "it's too busy now, come back later";
    } else {
        return 'come in';
    }
}

// const enterClub = brendaBouncerBot([17, 98]);
const enterClub = brendaBouncerBot([23, 102]);
// const enterClub = brendaBouncerBot([34, 95]);
console.log(enterClub);

//Calculating the average:
const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    // console.log(average);
    return average;
};

// const randomNumbers = calculateAverage ([3, 6, 4, 8, 2]);
// const randomNumbers = calculateAverage ([5, 45, 28, 99, 68]);
const randomNumbers = calculateAverage ([56, 55, 131, 43, 7]);
// calculateAverage(randomNumbers); Dit was niet goed zo

console.log(Math.round (randomNumbers));
// console.log(randomNumbers);
