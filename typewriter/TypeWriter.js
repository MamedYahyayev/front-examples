/*
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

export class TypeWriter {
  #CURRENT_WORD = "";
  #TYPEWRITER_SPEED = 200;
  #DELAY = 2000;

  constructor(typingWords, typingWordElement) {
    this.typingWords = typingWords;
    this.#handleTypingWordElement(typingWordElement);
  }

  /**
   * this method selects specific DOM element which you entered
   * @param {*} typingWordElement this element may be a class or an id element
   */
  #handleTypingWordElement(typingWordElement) {
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

  /**
   *  This method helps you type if you have textContent in your dom element, first deletes the text and
   *  then  inserts letter one by one
   */
  handleTyping() {
    if (this.typingWordEl.textContent) {
      this.#CURRENT_WORD = this.typingWordEl.textContent;
      this.#removeLetter();
    } else {
      this.#insertLetter();
    }

    setTimeout(() => this.handleTyping(), this.#DELAY);
  }

  /**
   *  This method removes letters one by one from the DOM element you specify
   */
  #removeLetter() {
    const removeLetterInterval = setInterval(() => {
      if (this.typingWordEl.textContent) {
        const letter = this.typingWordEl.textContent.split("");
        letter.pop();
        this.typingWordEl.textContent = letter.join("");
      } else {
        clearInterval(removeLetterInterval);
      }
    }, this.#TYPEWRITER_SPEED);
  }

  /**
   *  This method inserts letters one by one to the DOM element you specify
   */
  #insertLetter() {
    const index = this.#findWordIndexInArray();
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
    }, this.#TYPEWRITER_SPEED);
  }

  /**
   *  this method finds index of words in typingWords array and then return it
   */
  #findWordIndexInArray() {
    const index = this.typingWords.findIndex(
      (word) => this.#CURRENT_WORD === word
    );
    if (index === this.typingWords.length - 1) {
      this.#CURRENT_WORD = this.typingWords[0];
      return 0;
    }
    this.#CURRENT_WORD = this.typingWords[index + 1];
    return index + 1;
  }
}
