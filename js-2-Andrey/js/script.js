let words = {
    "rus": ["Привет", "Медведь", "Облоко"],
    "eng": ["Hello", "Bear", "Cloud"],
}

let rusBtn = document.querySelector('.btn--rus');
let engBtn = document.querySelector('.btn--eng');
let resetBtn = document.querySelector('.btn--reset')

rusBtn.addEventListener("click", function () {
    words["rus"].forEach(function(elem){
        console.log(elem);
    });
});

engBtn.addEventListener("click", function () {
    words["eng"].forEach(function(elem){
        console.log(elem);
    });
});

resetBtn.addEventListener("click", function () {
    console.clear();
})

