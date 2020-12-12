const hello = (callback) => {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 3000);
};

const sayHello = () => {
  setTimeout(() => {
    console.log("Say Hello");
  }, 2000);
};

hello(sayHello);
