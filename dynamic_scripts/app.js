// create script tag add some content there
const script = document.createElement("script");
script.innerHTML = `
    console.log("Hello There!")
    alert('Hi Bro!!')
`;
// add script element to the head
document.head.append(script);

// select the button
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const testScript = document.createElement("script");
  testScript.src = "test.js";
  testScript.defer = true;
  document.head.append(testScript);
});
