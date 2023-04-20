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
    let path = document.querySelector("button svg path");
  
    const textColor = getTextColor(bgColor);

    // for()
    // (i=0; i< indicatorDots.length; i++)
  
  
    document.body.style.backgroundColor = bgColor;
    button.style.backgroundColor = textColor;
    button.style.color = bgColor;
    path.style.fill = bgColor;
    document.body.style.color = textColor;
  }
  
  document.querySelector("button").addEventListener("click", roll);
  
  roll();