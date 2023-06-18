// 1.Date Object: ==========

// a) function 
const getDayOfTheWeek = currentDate => {
    let date = new Date(currentDate);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return todayName = weekDays[date.getUTCDay()];
}

// b) call function and display output
let currentDate = new Date();
let resizeDate = currentDate.toISOString().slice(0, 10);
let currentDayOfWeek = getDayOfTheWeek(resizeDate);
console.log("Today is: " + currentDayOfWeek); // console output
document.querySelector('.showDate').innerHTML = currentDayOfWeek; // html output

// 2.Math Object: ==============================================

// a) function
const rootSquareSum = numbersArray => {
    let sumOfSquares = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sumOfSquares += Math.pow(numbersArray[i], 2);
    }
    let squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
}

// b) call function and display output
const numbersArray = [7, 5, 4, 3, 1, 8, 9];
let squareResult = rootSquareSum(numbersArray);
console.log("The square root of the sum of squares is: " + squareResult); // console output
document.querySelector('.showSquare').innerHTML = squareResult; // html output

// 3.Numbers: ==============================================

// a) function
const checkPrimme = number => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// b) call function and display output
let number = 17;
let checkedPrime = checkPrimme(number);

if (checkedPrime === true) {
    console.log(number + " is a prime number"); // console output
    document.querySelector('.primeNumber').innerHTML = number + " is a prime number"; // html output
}

if (checkedPrime === false) {
    console.log(number + " is not a prime number"); // console output
    document.querySelector('.primeNumber').innerHTML = number + " is not a prime number"; // html output
}

// 4.Window Object: ==============================================

// a) function
const openWindow = (url, width, height) => {
    let left = (window.innerWidth - width) / 2;
    let top = (window.innerHeight - height) / 2;
    let windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;

    window.open(url, '_blank', windowFeatures);
}

// b) on click open the window
const url = "https://www.example.com";
const width = 800;
const height = 600;

// on click function
document.querySelector('.openWindow').addEventListener('click',()=>{
    openWindow(url, width, height);
});