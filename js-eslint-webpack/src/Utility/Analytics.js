const INTERVAL_TIME = 2000;

const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, INTERVAL_TIME);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
