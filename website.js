// SA0001: I BRENDAN DILEO, 000879513 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
// AUTHOR: BRENDAN DILEO, 000879513. USE OF BOOTSTRAP, HELP OF W3SCHOOLS, AND FONTAWESOME ELEMENTS

// This JavaScript file contains all functions and code to make up the functions and usage in the index html file
// I have focused on the use of random images, timers, counters, and input validation as specified in the assignment.
// For the random images, I have placed the list of images in a 3x3 2D array, and selected an image at random using a
// helper function, and for loop. For the clok (not specified in the assignment) I have used an interval to repeatedly
// execute the function given a certain number of seconds. Likewise with the timer, my focus was on the use of intervals
// as my own resreach led me to beleive that was the most efficient and simplistic way. In addition to the other functions,
// my focus was on loops to randmomize images, and the use of intervals for timers. I focused pretty heavily on problem decompostsion,
// as at first I was a bit overwhelmed, but as I worked on the fucntions one by one, it became clearer to me.

// HELPER FUNCTIONS

// This function takes a number as a parameter, and generates a number between 0, and the number passed - 1.
// It also uses a if statement to check if the number passed, is less than, or equal to 3, as there will be only
// 3 images per array, and 3 arrays. It uses the random math function to generate this number, and rounds down with 
// the use of the floor math function.
function randomImgNumberGenerator(number) {
    if (number <= 3) {
        return Math.floor(Math.random() * number);
    } else {
        return Math.floor(Math.random() * 3)
    }
}

// This function is used to validate a number value, and confirm it is a number. A single parameter 'number' is passed
// to the function. Inside the function body it uses an if statement where the condition is '!isNaN', where the 'isNaN'
// built in function is negated with the '!' operator to check if the value is a number. If it is, it returns the value.
// I made this at the start, and realized it didnt have as much of a use case as I intended, but I kept it anyways.
function isANumber(number) {
    if (!isNaN(number)) {
        return number;
    }
}

// This function plays apart in the validation of the users input. It takes one parameter as the time the user has
// entered as the timeout value, and inside the function converts this value to a number. It then uses an if statement
// to check if the value is a number, by calling upon the 'isANumber' helper function, if the time entered is equal to or
// greater than 500, and if the time entered is less than or equal to 10,000 as specified by the assignment. If it validates
// to true, the time is valid and is returned. If not, the time returned is assigned to null.
function validTime(time) {
    let numTime = Number(time);
    if (isANumber(numTime) && numTime >= 500 && numTime <= 10_000) {
        return numTime;
    } else {
        return null;
    }
}

// 'timeFormatter' is a helper function I came up with to simplify the process of the countdown. It takes 'amountTime'
// as a parameter, and uses an if statement to check if time should have a leading zero if it is under 10 seconds. The
// if statement checks if the time is less than 10, and if it is, a leading zero is concatenated to the time remaining
// to show it is under 10 seconds, for more of a visual sense rather than functionality. If it is not less than 10, no 
// leading zero is concatenated, and the time stays as is.
function timeFormatter(amountTime) {
    if (amountTime < 10) {
        return "0" + amountTime;
    } else {
        return amountTime;
    }
}

// The function 'millisecondsFormatter' is used as a type of formatting and calculation based function for the number of 
// milliseconds left in the timer displayed to the user. It is used to display the number of milliseconds, and update this
// number to the timer. The example video shown from the modules included milliseconds aswell as seconds remaining, so I felt
// it would be cool to try and make it work like that. A parameter is passed to the function as 'countdownTime', which is the
// time remaining and in the countdown timer. It will first convert the time into remaining milliseconds in the second, 
// deduct them from the overall time, and then add them back once they have been taken off to simulate that restart. 
// Additionally, they are also converted to hundrenths of a second so that only two decimal places are shown of milliseconds 
// following the decimal point.
function millisecondsFormatter(countdownTime) {
        // A variable 'milliseconds' is declared and initialized to the number of milliseconds calculated by the remainder division 
        // (modulus) when dividing the current countdown time by 1000 which gives the current number of milliseconds.
        let milliseconds = countdownTime % 1000;
        // Debug. Wanted to make sure my calculation was correct. 
        console.log(milliseconds);

        // The if statement checks if the number of milliseconds are less than 0. If the milliseconds hit 0, they need to be updated
        // and reset back to the top.
        if (milliseconds < 0) {
            // If they are less than 0, 1000 milliseconds are taken off the current time to act as if they actual second is being taken off
            // once milliseconds hit 0.
            countdownTime = countdownTime - 1000;
            // The number of milliseconds are then incremnted by 1000, to simulate the timer counting back down after they have gotten to 0.
            milliseconds = milliseconds + 1000;
        }

        // 'milliseconds' is initialized to the value after calculating the number of milliseconds divided
        // by 100. This converts the number of milliseconds into a hundrenths of a second so they show as 2 digits after the seconds place.
        milliseconds = Math.floor(milliseconds / 100);
        // Debug. My problem was I was dividing by 10 initially as I thought that was going to give me the two decicimal places, but I was incorrect
        // and needed to divide by 100.
        console.log(milliseconds);
        // The 'millisecondsStr' is returned to show the remaining milliseconds.
        return milliseconds;
}

// This function 'secondsFormatter' is used as a type of formatting and calculation based function for the number of seconds left in the timer similar
// to the milliseconds formatter that will be displayed on the timer to the user. The function will take one parameter as 'countdownTime' representing
// the time / time remaining in the countdown timer on the HTML page. So far this will be represented by milliseconds, but this function will convert/calculate
// the time into remaining seconds.
function secondsFormatter(countdownTime) {
        // A variable 'seconds' is declared and initialized to the value after calcultaing the countdown time divided by 1000.
        // The countdown time is divided by 1000 in order to get the remaining number of seconds, and uses Math.floor to round
        // down.
        let seconds = Math.floor(countdownTime / 1000);
        // Debug. I forgot Math.floor at first and was using round instead.
        // let seconds = Math.round(countdownTime / 1000);
        console.log(seconds);
        // The 'seconds' is returned to show remaining seconds in the timer.
        return seconds;
}

// 'clearTimerInterval' is a function used to clear the current interval (timer interval). It takes a interval as a parameter
// 'countdownTimer' and uses the built in javascript function to clear the current state of the interval / timer. It will stop
// the timer, so when it is recalled upon, it resets.
function clearTimerInterval(countdownTimer) {
    // Built in function provided by javascript is called upon and clears the interval 'countdownTimer'.
    clearInterval(countdownTimer);
}

// General Functions

// This function is used to alert a message when the user enters the webpage.
// First I have declared a function named 'promptUser', which will alert an welcome message to the user upon
// opening/loading the webpage.
function alertUser() {
    alert("Welcome! This is Brendan's second website using Javascript!");
}

// Function to perform the spin animation. This was provided by the assignment.
function do_animationSpin(event) {
    let target = event.srcElement;
    target.classList.remove('spin');
    setTimeout( () => {target.classList.add('spin');}, 0);
}

// This function is used to display a real time clock in the header. It will use military time, and I
// implemented this to get a feel for making a clock like function, so making a timer is a little easier. 
// This will be displayed in the header.
function headerClock() {
    // A variable 'currentTime' is declared and initialized to a new instance of the Date object.
    // This grabs the current date and time of the current day.
    let currentTime = new Date();

    // Each variable is declared and initialized to the seconds, minutes, and hours from the 'currentTime' variable
    // using getter methods provided by the built in Date object. Each value is stored in the correct variable.
    let seconds = timeFormatter(currentTime.getSeconds());
    let minutes = timeFormatter(currentTime.getMinutes());
    let hours = timeFormatter(currentTime.getHours());

    // Debug. This log statement was used as I was getting values on screen, but only one digit for each.
    console.log(seconds, minutes, hours);

    // The id 'realTimeClock' HTML element is grabbed, and assigned to the concatednated string.
    // The font awesome 'i' class is added here so the whole text is not overrun, ands followed by the clock icon, is the values
    // for hours, minutes, and seconds each of which is seperated by a colon to show the clock like timer.
    document.getElementById("realTimeClock").innerHTML = '<i class="fas fa-clock"></i>' + " " + hours + ":" + minutes + ":" + seconds;
}
// Outside of the functions body, the built in function 'setInterval' is called upon, and will use the 'headerClock' function in definetly.
// The value followed is the actual interval, so every 1000 milliseconds, the 'headerClock' function is recalled upon.
setInterval(headerClock, 1000);

// This variable 'imageCounter' is declared and initialized to 0 as default in order to track the number
// of times images have been changed.
let imageCounter = 0;
// The variable 'initialTimeout' is set to 10,000 acting as the default timeout/time for the counter function to countdown from.
let initialTimeout = 10_000;
// The variable 'intervalTimer' is declared but not initialized yet with the intention of tracking the id from the built in 'setInterval' function.
// I plan to use this in the countdown function when implemented.
let intervalTimer;

// Array of my images, in 3x3 2D array as asked in the assignment.
// Each array inside of the images array contains 3 pictures in a theme.
let images = [
    // DC Universe Image Group
    ["images/batman.png", "images/redhood.png", "images/robin.png"],
    // Marvel Universe Image Group
    ["images/ironman.png", "images/vision.png", "images/hulk.png"],
    // Pokemon Universe Image Group
    ["images/dragonite.png", "images/meowth.png", "images/dialga.png"]
]

// This function will be used to actually display the images randomly from each group. It uses a for loop to iterate through
// the array of images, each inner array, and chooses 1 from each to be shown at random. I tried to figure out how to ensure 
// one of each is shown and not more than one, but I could not exactly figure it out.
function randomImages() {
    // This variable 'numImgChosen' is declared and initialized to 3, as this will be the number of images displayed on the webpage.
    let numImgChosen = 3;

    // This for loop iterates through from 0, to 3 (numImgChosen), and for each iteration, 'i' is incremented by 1.
    for (let i = 0; i < numImgChosen; i++) {
       
        // A variable 'imageGroup' is declared and initialized to the random value when calling upon the 'randomImgNumberGenerator' 
        // function where the number passed to the function is the 'numImgChosen' variable (3).
        let imageGroup = randomImgNumberGenerator(numImgChosen);
        
        // Debug. This was used prior to adding Math.floor, as I was getting decimal numbers, and tried Math.round, but was still
        // Having issues, so I used Math.floor instead.
        console.log("Image Group Number: " + imageGroup);
        
        // A variable 'specificImage' is declared and initialized to the random value chosen when calling upon the 
        // 'randomImgNumberGenerator' function where the number passed to it is the 'numImgChosen' variable (3).
        let specificImage = randomImgNumberGenerator(numImgChosen);
        // Debug. This line served the same prupose as the previous debug, problem was I was getting decimal numbers.
        console.log("Specified Image To Show: " + specificImage);
        // Debug. Initially I was not adding 1, so one image was not being displayed.
        console.log("image" + i);
        // The id of the image element with a value of 1 - 3 is set to a random image from the arrays using the 'src' attribute
        // which is assigned to the images array, where the group and image chosen is based upon the random values saved into the
        // variables. Targets empty image tags.
        document.getElementById("image" + (i + 1)).src = images[imageGroup][specificImage];
    }
}

// This function will be used to validate the input the user will be entering for the timeout value. As the input must be a number
// value between 500, and 10,000 as requested by the assignment. The function will call upon the 'validTime' function to validate 
// the value entered, and will use an if statement to check, if the value was valid or invalid. Depending on the if statement, the 
// function will return true, or false to then display an error output if needed later on in the code.
function validateUserInput() {
    
    // A variable 'timeoutInput' is declared and initialized to the element grabbed from the 'timeoutInput' id on the HTML page. This
    // represents the timeout the user has inputted. The 'validTime' function is called upon to validate the user input and ensure it is
    // a valid entry.
    let timeoutInput = validTime(document.getElementById("timeoutInput").value);

    // The if statement checks if the value for 'timeoutInput' is null, as it will be assigned null if the value that has been entered is
    // not valid.
    if (timeoutInput === null) {
       // If this executed to true, the function returns false for further validation later in the code.
        return false;
    } else {
        // If the condition evaluates to false, the user has entered a valid input. In this case the 'initialTimeout' which is the variable
        // that holds the value for the countdown timer, is reassigned to the value the user has entered.
        initialTimeout = timeoutInput;
        // The 'startTheCountdown' function is called upon, and takes the new value entered by the user as the time for the countdown.
        startTheCountdown(initialTimeout);
        // The function will return true in this case so no error message will be disaplyed for validation further in the code.
        return true;
    }
}

// This function is used to alert a message to the user.
// First I have declared a function named 'alertCheckoutFunctions', which will display an alert message
// on the webpage.
function alertCheckoutFunctions() {
    alert("Checkout the image randomizer and the image gallery!");
}

// This function acts as the actual image counter. It will be called upon everytime an image or images change, and then the variable
// is incremented. It will not count the number of times the image has changed, because some randomizations will be counted as 3, but 
// it will display the number of randmomizations.
function setImageCounter() {
    // The element that has the id 'imageUpdateCounter' sets the content on the HTML page to the value of the 'imageCounter'
    // which is responsible for counting the number of times images have been randomized.
    document.getElementById("imageUpdateCounter").innerHTML = imageCounter;
}

// This function is responsible for starting, changing, and manipulating the countdown that will be seen on the HTML page. The function
// will use intervals to restart, change, and update the state of the timer. The function will take a single parameter as the initial time
// the timer will countdown from. The timer shown on the webpage will also feature seconds,  and milliseconds as this is the idea I got from \\
// the tutorial video shown as an example.
function startTheCountdown(timeout) {

    // A variable 'countdownTime' is declared and initialized to the value that is passed to the function as a argument/parameter.
    // This is the number of seconds the timer will countdown by. The variable is re-validated by calling upon the 'validTime' function
    // in order to further validate the time that has been passed.
    let countdownTime = validTime(timeout);
    // The variable 'timer' is declared and initialized to the value grabbed from the 'timerValue' id on the HTML page.
    let timer = document.getElementById("timerValue");

    // The 'clearTimerInterval' function is called upon to clear any instances of the timer that have been running and executed so far.
    clearTimerInterval(intervalTimer);

    // Now 'intervalOne' is assigned to a new interval using the 'setInterval' function.
    intervalTimer = setInterval(function() {

        // The countdown time is decremented by 10 milliseconds for each execution of the interval.
        countdownTime = countdownTime - 10;

        // A variable 'millisecondsStr' representing a formatted number of milliseconds is declared and initialized to the time that is
        // passed to the 'millisecondsFormatter' function as a parameter.
        let millisecondsStr = millisecondsFormatter(countdownTime);
        // Debug. Accidentally had milliseconds being passed to the function and not countdownTime.
        console.log(millisecondsStr);
        
        // A variable 'secondsStr' representing a formatted number of seconds is declared and initialized to the time that is
        // passed to the 'secondsFormatter' function as a parameter.
        let secondsStr = secondsFormatter(countdownTime);
        // Debug. Was passing seconds to the function on accident.
        // let secondsStr = secondsFormatter(seconds);
        console.log(secondsStr);
        
        // The 'timer' variable which holds the value/text from the 'timerValue' id is assigned to a concatenated string, where this string
        // uses the number of seconds, and number of milliseconds seperated by a period to visually represent the value of the timer.
        // By using the 'textContext', the value is set to this string.
        timer.textContent = secondsStr + "." + millisecondsStr;
        
        // This if statement is responsible for manipulating the timer and the values (seconds and milliseconds) of the timer.
        // First it checks if the time on the timer is less than 0.
        if (countdownTime <= 0) {
            // If it is, meaning the timer has hit 0. The 'clearInterval' built in function is used to clear/stop the current interval.
            clearTimerInterval(intervalTimer);
            // As the assignment states, once the timer hits 0, the images displayed must randomize. So after the timer has hit 0, the
            // 'randomImages' function is called upon to randomize the images that are displayed.
            randomImages();
            // Once the images are randomized, the variable declared at the start of the code for counting the number of times the image
            // has changed is incremnted by 3, as the assignment mentions that when the timer reaches 0 the web application will behave 
            // exactly as if the randomize button had been pressed.
            imageCounter+= 3;
            // The 'setImageCounter' function responsible for actually displaying the number of times the image is changed is then displayed
            // on the screen by calling upon the function.
            setImageCounter();
            // The variable 'countdownTime' is re-assigned to the variable 'initialTimeout' which is the default number of milliseconds the 
            // timer counts down by.
            countdownTime = initialTimeout;
            // The text content of the 'timer' variable is then reassigned and calculates the intitial timeout value divided by 1000,
            // which converts the initial milliseconds value into seconds. The 'toFixed' method is called upon to round the result value
            // into 1 decimal place.
            timer.textContent = (initialTimeout / 1000).toFixed(1);
            // The 'startTheCountdown' function is called upon to restart the timers countdown, and passed the value of initial timeout to the
            // function as parameter.
            startTheCountdown(initialTimeout);
        // The else-if's are responsible for changing the text and background color of the timer as the assignment specifies certain colors for
        // certain times.
        // If the time is less than 1500 (1.5 seconds), the text color is changed to white, and the background color is changed to red.
        } else if (countdownTime <= 1500) {
            timer.style.color = "white";
            timer.style.backgroundColor = "red";
        // If the time is less than 2500 (2.5 seconds), the text color is changed to black, and the background color is changed to yellow.
        } else if (countdownTime <= 2500) {
            timer.style.color = "black";
            timer.style.backgroundColor = "yellow";
        // Any time higher than 2500 (2.5 seconds) will execute the else block, the text color is changed to white, and the background color 
        // is changed to green.
        } else {
            timer.style.color = "white";
            timer.style.backgroundColor = "green";
        }
    // These braces close the 'setInterval' function, where the '10' represents the actual interval in the form of milliseconds, this means
    // for every 10 milliseconds that pass, the function executes taking time off of the timer.
    }, 10)
}

// The 'DOMContentLoaded' event listener is reponsible for executing the functions wrapped in the body once the webpage has loaded in.
// Assignment mentioned the use of DOM which led me to this choice of event listener.
document.addEventListener("DOMContentLoaded", function() {
    
    // The 'setTimeout' built in function calls upon the 'alertUser' function after a preset time of 5000 milliseconds
    // so it dosent alert the user as soon as they have entered the webpage.
    setTimeout(alertUser, 5000);

    // The 'setTimeout' built in function calls upon the 'alertCheckoutFunctions' function after a preset time of 20,000 milliseconds
    // so it dosent alert the user as soon as they have entered the webpage, but yet after being on the page for a bit.
    setTimeout(alertCheckoutFunctions, 20000);
    
    // The 'randomImages' function is called upon to display and randomize the images.
    randomImages();
    // The 'setImageCounter' function is called upon to set the number of times the image has been changed to 0 as default.
    setImageCounter();
    
    // The 'setTimeout' built in function calls upon the 'startTheCountdown' function after a preset time of 3000 milliseconds, 
    // so that the timer dosent start for 3 seconds of the webpage being loaded. Once the 'setTimeout' has passed the 3000 milliseconds,
    // the function is called upon, and the 'initialTimeout' value is passed as default starting the timer at 10000 milliseconds (10 seconds)
    // as default until it is changed.
    setTimeout(function() {
        startTheCountdown(initialTimeout);
        },3000);
    
    // An event listener is added to the HTML page element of 'randomButton' so when the button is clicked, the code inside the
    // code block is executed.
    document.getElementById("randomButton").addEventListener("click", function() {
        // As the assignment states the random button should trigger the randomization of the images, so the 'randomImages' function
        // is called upon.
        randomImages();
        // The assignment also says that when the button is pressed, the counter should be incremented by 3, so the 'imageCounter'
        // is incremented by 3.
        imageCounter+= 3;
        // The 'setImageCounter' function is called upon to display the updated number of times the images have been updated.
        setImageCounter();
        // Any current interval is cleared/stopped acting as a reset of the current timer counting down.
        clearTimerInterval(intervalTimer);
        // The 'startTheCountdown' method is called upon to start a new countdown after the random button was pressed as the assignment
        // mentioned.
        startTheCountdown(initialTimeout);
    })

    // Another event listener is added to the HTML page element of 'timeoutInputButton' so when the timeout button is clicked,
    // the code inside the body of this code block is executed.
    document.getElementById("timeoutInputButton").addEventListener("click", function() {
        // This if statement checks if the 'validateUserInput' function returned true, or false.
        if (!validateUserInput()) {
                // If it returned false checked using the '!'/NOT operator, the currently empty 'timeoutOutput' element's text
                // is set to the string as validation.
                document.getElementById("timeoutOutput").textContent = "The number must be between 500 and 10,000!";
                // Debug. Accidentally was using innerHTML at first.
                console.log(timeoutOutput);
        } else {
            // If the function returned true, the output text is left empty.
            document.getElementById("timeoutOutput").textContent = "";
            // Debug. Accidentally was using innerHTML at first.
            console.log(timeoutOutput);
            // The 'startTheCountdown' function is called upon where the users input is grabbed from the 'timeoutInput' id and passed
            // to the function as the time it will countdown by. Prior to this, as validation the 'validTime' method is also called upon
            // to validate the time just in case.
            startTheCountdown(validTime(document.getElementById("timeoutInput").value));
        }
        });
});