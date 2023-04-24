// Basic console log stattement
console.log("Background changer is linked");


// Function for changing colors
function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `#${color}`;
  }
  
  function getRGB(c) {
    return parseInt(c, 16) || c;
  }
  
  function getsRGB(c) {
    return getRGB(c) / 255 <= 0.03928
      ? getRGB(c) / 255 / 12.92
      : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
  }
  
  function getLuminance(hexColor) {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    );
  }
  
  function getContrast(f, b) {
    const L1 = getLuminance(f);
    const L2 = getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }
  
  function getTextColor(bgColor) {
    const whiteContrast = getContrast(bgColor, "#ffffff");
    const blackContrast = getContrast(bgColor, "#000000");
  
    return whiteContrast > blackContrast ? "#ffffff" : "#000000";
  }
  
  function roll() {
    const bgColor = generateRandomColor();
  
    const button = document.querySelector("button");
    let buttonIconPath = document.querySelector("button svg path");
    let linesOnPage = document.querySelectorAll(".color-line");
    let cropMarks = document.querySelectorAll(".crop-line");
    let filledInIcons = document.querySelectorAll(".filled-icon");
    let inputsOnScreen = document.querySelectorAll("input");
    
    const textColor = getTextColor(bgColor);
    
  
    // Changes background color
    document.body.style.backgroundColor = bgColor;

    // Changes button background color
    button.style.backgroundColor = textColor;

    // Changes button text color
    button.style.color = bgColor;

    // Changes icon color
    buttonIconPath.style.fill = bgColor;

    // Changes color of svg lines with class ".color-line" lines on page
    for(i=0; i<linesOnPage.length; i++) {
      linesOnPage[i].style.fill = textColor;
    };

    // Changes color of stroke of svgs paths with the class="crop-line";.
    for(z=0; z<cropMarks.length; z++) {
      cropMarks[z].style.stroke = textColor;
    };

    // Changes fill color of svgs paths with class="filled-icon";.
    for(y=0; y<filledInIcons.length; y++) {
      filledInIcons[y].style.fill = textColor;
    };

    // Changes border color of all inputs .... Maybe there is a better way
    // for(x=0; x<inputsOnScreen.length; x++) {
    //   inputsOnScreen[x].style.border = `2px solid ${textColor}`;
    //   inputsOnScreen[x].style.color = `${textColor}`;
    // };

    // Changes border color an inside content of all inputs
    for(q=0; q<inputsOnScreen.length; q++) {
      console.log(inputsOnScreen[q]);
      // add if statement witch will iterate over all inputs and style them acordingly.
      inputsOnScreen[q].style.filter = "invert(100%) sepia(25%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)";
    }

    document.body.style.color = textColor;
  }
  
  document.querySelector("button").addEventListener("click", roll);
  
  roll();