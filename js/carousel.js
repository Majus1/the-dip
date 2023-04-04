// ::::: The workout option slider :::::
// ::: Makes carousell scrollable :::::
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
    
    if (carousel.scrollLeft > prevScrollLeft) {
        // if user is scrolling to the right
        counterValue += 1; // adds one from the counter
        console.log(`User scrolled right and the value of counterValue is ${counterValue}`);
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else {
        // if user is scrolling to the left
        Math.abs(counterValue) -= 1; // subtracts one from the counter
        console.log(`User scrolled left and the value of counterValue is ${counterValue}`);
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

// ::: Makes carousell scrollable :::

// ::: indicator dot logic :::

// ::: indicator dot logic :::

// ::::: The workout option slider :::::