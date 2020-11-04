let words = [
    rus = ["Привет", "Медведь", "Облоко"],
    eng = ["Hello", "Bear", "Cloud"],
];


let rusBtn = document.querySelector('.btn--rus');
let engBtn = document.querySelector('.btn--eng');
let resetBtn = document.querySelector('.btn--reset')

rusBtn.addEventListener("click", function () {
    for(let i = 0; i < words.length; i++){
        for(let y = 0; y < words[i].length; y++){
            console.log(words[0][0], words[0][1], words[0][2] );
        }
    }
})
engBtn.addEventListener("click", function () {
    for(let i = 0; i < words.length; i++){
        for(let y = 0; y < words[i].length; y++){
            console.log(words[1][0], words[1][1], words[1][2] );
        }
    }
})
resetBtn.addEventListener("click", function () {
    console.clear();
})

