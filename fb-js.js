const users = [
  {
    username: "Samir",
    password: "12345",
  },
  {
    username: "a",
    password: "1",
  },
];

const newsFeed = [
  {
    username: "Zakir",
    timeline: "Si Senior",
  },
  {
    username: "Qasim",
    timeline: "Bana bak muaaarrrem",
  },
];

var usernamePrompt = prompt("Whats is your username?");
var passwordPrompt = prompt("Whats is your password?");

function isValid(username, password) {
  for (const user of users) {
    if (username === user.username && password === user.password) {
      return true;
    }
  }
  return false;
}

function login(username, password) {
  const result = isValid(username, password);
  if (result) console.log(newsFeed);
  else console.log("INVALID USER");
}

login(usernamePrompt, passwordPrompt);
