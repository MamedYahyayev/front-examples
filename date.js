const date = new Date();
console.log("Date: ", date);
console.log("Day of Year: ", date.getDate());
console.log("Full Year: ", date.getFullYear());
console.log("Month: (0 - 11)", date.getMonth());
console.log("Week of Day: ", date.getDay());
console.log("Hours: ", date.getHours());
console.log("Minutes: ", date.getMinutes());
console.log("Seconds: ", date.getSeconds());
console.log("Millisecond: ", date.getMilliseconds());
console.log("Time: ", date.getTime());
console.log("Date to JSON: ", date.toJSON());

const date2 = Date.now();
console.log("Date 2: ", date2);

const date3 = new Date("12/05/2020");
console.log("Date 3: ", date3);

const date4 = new Date(2020, 5, 3, 12, 22, 33, 5);
console.log("Date 4: ", date4);
