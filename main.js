



//Kreativ opgave - AFLEVERING




//knap 1
let knap1 = document.querySelector(".trykher1")

knap1.addEventListener("click", function(){
    let reveal1 = document.querySelector(".trykher2");

  if (reveal1.classList) { 
    reveal1.classList.toggle("nyknap");
  } 
})


//knap 2
let knap2 = document.querySelector(".trykher2")

knap2.addEventListener("dblclick", function(){
    let reveal2 = document.querySelector(".trykher3");

  if (reveal2.classList) { 
    reveal2.classList.toggle("nyknap");
  } 
})


//Knap 3
let knap3 = document.querySelector(".trykher3")

knap3.addEventListener("mouseover", function(){
    let reveal3 = document.querySelector(".trykher4");

  if (reveal3.classList) { 
    reveal3.classList.toggle("nyknap");
  } 
})


//Knap 4
let knap4 = document.querySelector(".trykher4")

knap4.addEventListener("contextmenu", function(){
    let reveal4 = document.querySelector(".trykher5");

  if (reveal4.classList) { 
    reveal4.classList.toggle("nyknap");
  } 
})


//Knap 5
let knap5 = document.querySelector(".trykher5")

knap5.addEventListener("drag", function(){
    let reveal5 = document.querySelector(".trykher6");

  if (reveal5.classList) { 
    reveal5.classList.toggle("nyknap");
  } 
})


//Knap 6
let knap6 = document.querySelector(".trykher6")

knap6.addEventListener("keypress", function(){
    let reveal6 = document.querySelector(".skrivher");

  if (reveal6.classList) { 
    reveal6.classList.toggle("nyknap");
  } 
})



//Knap 7
let knap7 = document.querySelector(".skrivher")

knap7.addEventListener("change", function(){
    alert('Hey, du kom igennem spillet med de 7 event funktioner - NOICE!')
})





//Skift farve
inputfield.addEventListener('input', function(){
    if(inputfield.value.length > 3){
        document.body.classList.add('bgBlue');
        button.classList.add('show')
    }
        else {
            document.body.classList.remove('bgBlue');
            document.querySelector('#btn').classList.remove('show');
        }
})