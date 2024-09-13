window.addEventListener("DOMContentLoaded",function(){
    "use strict";
    const button = document.querySelector(".main_button");
    const input = document.querySelector(".main_input");
    const score = document.querySelector(".score");
    button.addEventListener("click",function(){
        if(Number(input.value)==getRandom()){
            let counter = 0;
            let p = document.createElement("p");
            p.classList.add("score");
            button.after(p);
            p.textContent = "You won";
            p.classList.add("colorWin")
            counter++;
            score.textContent = counter;
            score.classList.add("colorWin"); 
        }else if(Number(input.value)<getRandom()){
            let counter = 0;
            let p = document.createElement("p");
            p.classList.add("score");
            button.after(p);
            p.textContent = "Number is a bit higher";
            p.classList.add("colorLose");
            counter--;
            score.textContent = counter;
            score.classList.add("colorLose"); 
        }else if(Number(input.value)>getRandom()){
            let counter = 0;
            let p = document.createElement("p");
            p.classList.add("score");
            button.after(p);
            p.textContent = "Number is a bit lower";
            p.classList.add("colorLose");
            counter--;
            score.textContent = counter;
            score.classList.add("colorLose"); 
        }
    });
    function getRandom(){
       return Math.floor(Math.random()*100);
    }
    

})