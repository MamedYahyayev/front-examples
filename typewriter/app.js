/**
 * 1. Select dom elements which is span ✔
 * 2. create words array ✔
 * 3. create global element which is CURRENT_WORD ✔
 * 4. create removeLetter() method ✔
 * 5. create insertLetter() method ✔
 * 6. create a new method and combine removeLetter() and insertLetter() methods together ✔
 * 
 * 
 * Refactoring
 * 1. Replace hard coded value with variables
 * 2. Create dynamic array which holds words
 * 3. Create class and objects for this app
 *
 */

// select word
const typingWord = document.getElementById("typing-word");
const words = ["programmer", "student", "teacher"];

let CURRENT_WORD = "";

function removeLetter() {
  const removeLetterInterval = setInterval(() => {
    if (typingWord.textContent) {
      const letter = typingWord.textContent.split("");
      letter.pop();
      typingWord.textContent = letter.join("");
    } else {
      clearInterval(removeLetterInterval);
    }
  }, 200);
}

function insertLetter() {
  const index = findWordIndexInArray();
  const word = words[index];
  const letter = word.split("");
  const insertLetterInterval = setInterval(() => {
    if (letter.length > 0) {
      typingWord.textContent = typingWord.textContent + letter[0];
      letter.shift();
    } else {
      clearInterval(insertLetterInterval);
    }
  }, 200);
}

function findWordIndexInArray() {
  const index = words.findIndex((word) => CURRENT_WORD === word);
  if (index === words.length - 1) {
    CURRENT_WORD = words[0];
    return 0;
  }
  CURRENT_WORD = words[index + 1];
  return index + 1;
}

function type() {
  if (typingWord.textContent) {
    CURRENT_WORD = typingWord.textContent;
    removeLetter();
  } else {
    insertLetter();
  }

  setTimeout(() => type(), 2000);
}

type();
