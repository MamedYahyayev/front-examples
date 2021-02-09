// dom elements for local storage
const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// dom elements for session storage
const storeSSBtn = document.getElementById("store-btn-ss");
const retrieveSSBtn = document.getElementById("retrieve-btn-ss");

const name = prompt("Enter your name: ");

// events for localStorage
storeBtn.addEventListener("click", () => {
  if (name) setDataToLocalStorage("name", name);
  else
    console.log(
      "Field cannot be empty if you want to store data in the local storage!!!"
    );
});

retrieveBtn.addEventListener("click", () => {
  retrieveDataFromLocalStorage("name");
});

// set data to local storage
function setDataToLocalStorage(dataName, dataValue) {
  localStorage.setItem(dataName, dataValue);
  console.log("Data stored on the local storage");
}

// retrieve data from local storage
function retrieveDataFromLocalStorage(dataName) {
  const retrieveData = localStorage.getItem(dataName);
  if (retrieveData) {
    console.log(retrieveData);
  } else {
    console.log(`${dataName} field cannot found on the local storage!!!`);
  }
}

// Session Storage
storeSSBtn.addEventListener("click", () => {
  if (name) setDataToSessionStorage("name", name);
  else
    console.log(
      "Field cannot be empty if you want to store data in the local storage!!!"
    );
});

retrieveSSBtn.addEventListener("click", () => {
  retrieveDataFromSessionStorage("name");
});

// set data to session storage
function setDataToSessionStorage(dataName, dataValue) {
  sessionStorage.setItem(dataName, dataValue);
  console.log("Data stored on the session storage");
}

// retrieve data from session storage
function retrieveDataFromSessionStorage(dataName) {
  const retrieveData = sessionStorage.getItem(dataName);
  if (retrieveData) {
    console.log(retrieveData);
  } else {
    console.log(`${dataName} field cannot found on the session storage!!!`);
  }
}

/**
 *  Differences between localStorage and sessionStorage
 *  
 *  LocalStorage stores data until it was deleted.
 *  If we change the browser or close current window and open this website in another window,
 *  data can be accessible always.  
 *  
 *  SessionStorage stores data until data deleted and also current session closed.
 *  If we change the browser, data deleted from there and if we visit same url in another tab,
 *  data won't  exist that session or window
 * 
 */