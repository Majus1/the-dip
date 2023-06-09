// Basic console log stattement
// console.log("Background changer is linked");
// Basic console log stattement



// ::::: Function for getting a random color :::::
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
  // ::::: Function for getting a random color :::::



  // ::::: Function that converts hex to RGB :::::
  function convertToRGB(color) {
    // Remove the hash symbol from the beginning of the color code
    const hexString = color.substring(1);
  
    // Split the string into three equal parts of two characters each
    const r = parseInt(hexString.substring(0, 2), 16);
    const g = parseInt(hexString.substring(2, 4), 16);
    const b = parseInt(hexString.substring(4, 6), 16);
  
    // Combine the decimal values into an RGB color string
    const rgbString = "rgb(" + r + ", " + g + ", " + b + ")";
  
    return rgbString;
  }
  // ::::: Function that converts hex to RGB :::::
  


  // ::::: Function that triggers color change :::::
  function roll() {
    const bgColor = generateRandomColor();
  
    const buttonOnScreen = document.querySelectorAll("button");
    let buttonIconPath = document.querySelectorAll("button svg path");
    let linesOnPage = document.querySelectorAll(".color-line");
    let cropMarks = document.querySelectorAll(".crop-line");
    let filledInIcons = document.querySelectorAll(".filled-icon");
    let inputsOnScreen = document.querySelectorAll("input");
    let inputsOnScreenBorderColor ;
    
    const textColor = getTextColor(bgColor);
    
  
    // Changes background color
    document.body.style.backgroundColor = bgColor;

    // Changes all button icon colors
    for (a=0; a<buttonIconPath.length; a++) {
      buttonIconPath[a].style.fill = bgColor;
    };

    // Changes background color of all buttons
    for (b=0; b<buttonOnScreen.length; b++) {
      buttonOnScreen[b].style.backgroundColor = textColor;
    };

    // Changes text color of all buttons
    for (c=0; c<buttonOnScreen.length; c++) {
      buttonOnScreen[c].style.color = bgColor;
    };

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

    // Changes border color of all inputs
    for(q=0; q<inputsOnScreen.length; q++) {
      // Gets property value "border-color" from input
      inputsOnScreenBorderColor = getComputedStyle(inputsOnScreen[q]).getPropertyValue("border-color");

      // Checks if border color and text color march, if they dont it switches colors to match text.
      if (inputsOnScreenBorderColor !== convertToRGB(textColor)) {
        // console.log(`the colors didnt match not match but were fixed`);
        inputsOnScreen[q].style.filter = "invert(100%) sepia(25%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)";
      } else {
        inputsOnScreen[q].style.removeProperty("filter");
      }
    }

    document.body.style.color = textColor;
  }
  
  document.querySelector("button").addEventListener("click", roll);
  
  roll();
  // ::::: Function that triggers color change :::::