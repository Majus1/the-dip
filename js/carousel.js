// ::::: Dot Possition check :::::

/*
Works great with the autoSlide they work together
to allow the user a good navigation experience while
using the application.
*/

let indicatorDots = document.querySelectorAll(".dot");

const dotPossitionCheck = () => {
    if (counterValue === 0) {
        
        // Removes filled in dot form all indicator dots
        let indicatorDots = document.querySelectorAll(".dot");
        for (i=0; i< indicatorDots.length; i++) {
            indicatorDots[i].classList.add("inactivated-content");
        }

        // Makes dot coresponting to the counterValue active
        workoutOption = document.querySelector("#first-dot");
        workoutOption.classList.add("activated-content");
        workoutOption.classList.remove("inactivated-content");

        return

    } else if (counterValue === 1) {
        
        // Removes filled in dot form all indicator dots
        let indicatorDots = document.querySelectorAll(".dot");
        for (i=0; i< indicatorDots.length; i++) {
            indicatorDots[i].classList.add("inactivated-content");
        }

        // Makes dot coresponting to the counterValue active
        workoutOption = document.querySelector("#second-dot");
        workoutOption.classList.add("activated-content");
        workoutOption.classList.remove("inactivated-content");

        return

    } else if (counterValue === 2) {
        
        // Removes filled in dot form all indicator dots
        let indicatorDots = document.querySelectorAll(".dot");
        for (i=0; i< indicatorDots.length; i++) {
            indicatorDots[i].classList.add("inactivated-content");
        }

        // Makes dot coresponting to the counterValue active
        workoutOption = document.querySelector("#third-dot");
        workoutOption.classList.add("activated-content");
        workoutOption.classList.remove("inactivated-content");

        return

    } else if (counterValue === 3) {
        
        // Removes filled in dot form all indicator dots
        let indicatorDots = document.querySelectorAll(".dot");
        for (i=0; i< indicatorDots.length; i++) {
            indicatorDots[i].classList.add("inactivated-content");
        }

        // Makes dot coresponting to the counterValue active
        workoutOption = document.querySelector("#fourth-dot");
        workoutOption.classList.add("activated-content");
        workoutOption.classList.remove("inactivated-content");

        return
    }
}

// ::::: Dot Possition check :::::



// ::::: The workout option slider :::::

/*
- Makes carousel scrollable by looking at the position diff.
- Allows the user to swipe and select different workout.
- By swiping left and right the user can choose from a predefined workouts.
*/


const carousel = document.querySelector(".carousel");

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
let counterValue = 0 // Sets the value of the counter

const autoSlide = () => {
    // if there is no image left to scroll then return from here.
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    
    positionDiff = Math.abs(positionDiff) // making position Diff alue to positive
    let firstImgWidth = 428; // this value is hard coded but it shouldent be.
    // getting difference value that needs to add or reduce from carousel left to make middle image center
    let valDifference = firstImgWidth - positionDiff;
    

    // if user scrolls right following happens
    if (carousel.scrollLeft > prevScrollLeft) {
        
        // Changes scrollable carousell icon
        counterValue += 1; // adds one from the counter
        console.log(`User scrolled right and the value of counterValue is ${counterValue}`);
        
        // Changes that effect the indicator dot by calling the dotPossitionCheck function.
        dotPossitionCheck();

        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

    } 
    
    // if user scrolls left following happens
    else {
        // if user is scrolling to the left
        if (counterValue === 0) {
            console.log(`User scrolled left but value cannot be negative`);
        } else {
            counterValue -= 1;
            console.log(`User scrolled left and the value of counterValue is ${counterValue}`);

            // Changes that effect the indicator dot by calling the dotPossitionCheck function.
            dotPossitionCheck();
        }
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
}

const dragStart = (e) => {
    // Updatig global variables on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse ponter.
    if(!isDragStart) return;
    e.preventDefault(); 
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

// ::::: Resources :::::
// https://www.youtube.com/watch?v=7HPsdVQhpRw
// ::::: Resources :::::

// ::::: The workout option slider :::::