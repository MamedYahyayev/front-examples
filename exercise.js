const button = document.querySelectorAll(".btn-class");

for(let i=0; i < button.length ; i++){
    button[i].addEventListener('click' , () => {
        console.log("Clicked")
    });
}

