// Break
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log("-----------------------------------------------");

// Continue
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

console.log("-----------------------------------------------");

// Labeled statements
firstarray: for (let i = 0; i < 5; i++) {
  secondarray: for (let j = 0; j < 3; j++) {
    console.log("i=" + i + " " + "j=" + j);
    if (j === 2) break firstarray;
  }
}
