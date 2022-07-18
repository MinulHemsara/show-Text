const click = document.querySelectorAll('.click');
const close = document.querySelector('.close-model');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
console.log(click);

for (let i = 0; i < click.length; i++){
    click[i].addEventListener('click',function (){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

close.addEventListener('click', function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})