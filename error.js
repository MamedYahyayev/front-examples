const error = new Error();
error.code = 404;
console.log(error);

const name = "Sa";
if(name.length < 3){
    throw new Error("Your name cannot be less than 3 letters");
}else{
    console.log("Your name: " + name);
}

