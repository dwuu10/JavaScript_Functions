console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count <= 0) {
        count = 1;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(100)
printOdds(0)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(username, age) {
    aboveSixteen = `Congrats ${username}, you can drive!`
    belowSixteen = `Sorry ${username}, but you need to wait until you're 16.`
    if (username == undefined || username == null) {
        console.log("not a valid name")
    }
    if (age == undefined || age == null) {
        console.log("not a valid age")
    }
    else {
        if (age < 16) {
            console.log(belowSixteen);
        }
        else {
            console.log(aboveSixteen);
        }
    }
    
}
checkAge("Dylan", 19)
checkAge("Nolan", 15)
checkAge("", 12)
checkAge("Hi")
checkAge()

function quadrant(x, y) {
    if (x > 0 & y > 0) {
        console.log("Quadrant 1");
    }
    if (x < 0 & y > 0) {
        console.log("Quadrant 2");
    }
    if (x < 0 & y < 0) {
        console.log("Quadrant 3");
    }
    if (x > 0 & y < 0) {
        console.log("Quadrant 4");
    }
    else {
        if (x == 0) {
            console.log("on the y-axis");
        }
        if (y == 0) {
            console.log("on the x-axis");
        }  
    }   
}

quadrant(0, 1)
quadrant(1, 0)
quadrant(0, 0)

quadrant(1, 1)
quadrant(-1, 1)
quadrant(-1, -1)
quadrant(1, -1)


function typeOfTriangle(side1, side2, side3) {
    let sum1 = side1 + side2
    let sum2 = side2 + side3
    let sum3 = side1 + side3
    if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
        return "invalid triangle"
    }
    else {
        if(side1 == side2 & side1 == side3) {
            return "equilateral triangle"
        }
        if (side1 == side2 || side2 == side3 || side3 == side1) {
            return "isosceles triangle"
        }
        else {
            return "scalene triangle"
        }
    }

}
console.log(typeOfTriangle(1, 2, 2))
console.log(typeOfTriangle(1, 1, 2))
console.log(typeOfTriangle(3, 4, 5))
console.log(typeOfTriangle(1, 1, 1))