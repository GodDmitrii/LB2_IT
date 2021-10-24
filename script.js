const wrapper = document.querySelector('.radioButton');
const button1 = document.querySelector('#Choice1');
const button2 = document.querySelector('#Choice2');
const button3 = document.querySelector('#Choice3');
console.dir(button1);
console.dir(wrapper);
button1.addEventListener('click', e => {
    wrapper.style.background = 'green';
});
button2.addEventListener('click', e => {
    wrapper.style.background = 'brown';
});
button3.addEventListener('click', e => {
    wrapper.style.background = 'orange';
});
