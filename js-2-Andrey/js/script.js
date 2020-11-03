let words = [
    rus = ["Привет", "Медведь", "Облоко"],
    eng = ["Hello", "Bear", "Cloud"],
];


let rusBtn = document.querySelector('.btn--rus');
let engBtn = document.querySelector('.btn--eng');
let resetBtn = document.querySelector('.btn--reset')

rusBtn.addEventListener("click", function () {
    console.log(words[0]);
})
engBtn.addEventListener("click", function () {
    console.log(words[1]);
})
resetBtn.addEventListener("click", function () {
    console.clear();
})

