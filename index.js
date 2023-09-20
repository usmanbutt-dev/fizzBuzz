let button = document.querySelector("button");
button.addEventListener(`click`, ()=> {
    alert(`Button Pressed!`);
})

document.addEventListener(`keyup`, (event)=> {
    if(event.keyCode == 13 || event.keyCode == 32 ) {
        alert(`Button Pressed!`);
        for(let i = 0; i < 100; i++) {
            console.log(i);
        }
    }
})