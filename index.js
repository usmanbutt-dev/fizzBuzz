let button = document.querySelector("button");
let list = document.querySelector("ul");
let i = 1;
button.addEventListener(`click`, ()=> {
    generate();
})

document.addEventListener(`keyup`, (event)=> {
    if(event.keyCode == 13 || event.keyCode == 32 ) {
        generate();
    }
})


function generate() {
        let item = document.createElement("li");
        let text = "";
        if(i % 3 == 0 && i %  5 == 0) {
            text = document.createTextNode("FizzBuzz");
        }
        else if(i % 3 == 0) {
            text = document.createTextNode("Fizz");
        }
        else if(i % 5 == 0) {
            text = document.createTextNode("Buzz");
        }
        else {
            text = document.createTextNode(i);
        }
        item.appendChild(text);
        list.appendChild(item);
        item.scrollIntoView({ behavior: 'smooth' });
        item.classList.add("active");
        i++;
}