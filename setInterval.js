const myInterval = setInterval(
  () => console.log("it's called again every 3 seconds"),
  3000
);

// after 15 seconds , clear interval
setTimeout(() => {
  clearInterval(myInterval);
  console.log("Interval was cleared")
}, 15000);
