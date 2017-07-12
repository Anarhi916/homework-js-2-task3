let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', number);

function number(){
    if(input.value > 0 && input.value< 21){
        alert('Квартира находится в 1-м подьезде!')
    }
    else if(input.value > 20 && input.value< 65){
        alert('Квартира находится в 2-м подьезде!')
    }
    else if(input.value > 65 && input.value< 81){
        alert('Квартира находится в 3-м подьезде!')
    }
}