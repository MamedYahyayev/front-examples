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
 * 1. Replace hard coded value with variables ✔
 * 2. Create dynamic array which holds words ✔
 * 3. Create class and objects for this app ✔
 *
 */

class TypeWriter {
  constructor(typingWords, typingWordElement) {
    this.typingWords = typingWords;
    this.CURRENT_WORD = "";
    this.TYPEWRITER_SPEED = 200;
    this.DELAY = 2000;
    this.handleTypingWordElement(typingWordElement);
  }

  handleTypingWordElement(typingWordElement) {
    const identifier = typingWordElement.charAt(0);
    let typingWordEl = "";
    if (identifier === "#") {
      typingWordEl = document.getElementById(typingWordElement.substring(1));
      this.typingWordEl = typingWordEl;
    } else if (identifier === ".") {
      typingWordEl = document.querySelector(typingWordElement);
      this.typingWordEl = typingWordEl;
    }
  }

  handleTyping() {
    if (this.typingWordEl.textContent) {
      this.CURRENT_WORD = this.typingWordEl.textContent;
      this.removeLetter();
    } else {
      this.insertLetter();
    }

    setTimeout(() => this.handleTyping(), this.DELAY);
  }

  removeLetter() {
    const removeLetterInterval = setInterval(() => {
      if (this.typingWordEl.textContent) {
        const letter = this.typingWordEl.textContent.split("");
        letter.pop();
        this.typingWordEl.textContent = letter.join("");
      } else {
        clearInterval(removeLetterInterval);
      }
    }, this.TYPEWRITER_SPEED);
  }

  insertLetter() {
    const index = this.findWordIndexInArray();
    const word = this.typingWords[index];
    const letter = word.split("");
    const insertLetterInterval = setInterval(() => {
      if (letter.length > 0) {
        this.typingWordEl.textContent =
          this.typingWordEl.textContent + letter[0];
        letter.shift();
      } else {
        clearInterval(insertLetterInterval);
      }
    }, this.TYPEWRITER_SPEED);
  }

  findWordIndexInArray() {
    const index = this.typingWords.findIndex(
      (word) => this.CURRENT_WORD === word
    );
    if (index === this.typingWords.length - 1) {
      this.CURRENT_WORD = this.typingWords[0];
      return 0;
    }
    this.CURRENT_WORD = this.typingWords[index + 1];
    return index + 1;
  }
}

const typeWriter = new TypeWriter(
  ["Salam", "Necesen", "Neynirsen"],
  "#typing-word"
);
typeWriter.handleTyping();
