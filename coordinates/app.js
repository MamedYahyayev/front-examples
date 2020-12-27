const scrollableDiv = document.getElementById("scroll-element");

console.log(scrollableDiv.getBoundingClientRect());

// This is the y
console.log("Y: ", scrollableDiv.offsetTop);

// This is the x
console.log("X: ", scrollableDiv.offsetLeft);

// This is the y border
console.log("Border of Y axis: ", scrollableDiv.clientTop);

// This is the x border
console.log("Border of X axis: ", scrollableDiv.clientLeft);

// This is the inner height of the box
console.log("Inner height: ", scrollableDiv.clientHeight);

// this is the inner width of the box
console.log("Inner width: ", scrollableDiv.clientWidth);

// this is the height of the div (scroll included).
console.log("Scroll Height: ", scrollableDiv.scrollHeight);

// this is the window object's height
console.log("Window Inner Height: ", window.innerHeight);

// this is the window object's width
console.log("Window Inner Width: ", window.innerWidth);

// Positioning Tooltip
const boxParent = document.getElementById("tooltip-parent");

const toolTip = document.createElement("div");
toolTip.className = "toolTip";
toolTip.innerHTML = `
  <h1>Lorem Ipsum</h1>
  <p>Lorem ipsum dolor sit amet.</p>
`;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const scrollValue = boxParent.scrollTop;
    const box = button.parentElement;
    const y = box.offsetTop;
    const x = box.offsetLeft;
    const toolTipTop = box.clientHeight + y - scrollValue - 10;

    console.log("Tooltip Top: ", toolTipTop);

    toolTip.style.position = "absolute";
    toolTip.style.top = toolTipTop + "px";
    toolTip.style.left = x + "px";

    boxParent.appendChild(toolTip);
    console.log(toolTip.getBoundingClientRect());
  });
});
