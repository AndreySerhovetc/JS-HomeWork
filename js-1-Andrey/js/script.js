let name = prompt("Привіт, як тебе звати ?");
let age = prompt("Скільки тобі років ?");

if(age < 0){
    alert("Ошибка!!!");
}else if(age <= 16){
    alert(`Привет, ${name}! Вы подросток!`);
}else if(age >= 17 && age <= 40){
    alert(`Привет, ${name}! Вы молодой человек!`);
}else if(age >= 41){
    alert(`Привет, ${name}! Вы старичок!`);
} 
