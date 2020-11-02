let name = prompt("Привет,как тебя зовут?");
let age = prompt("Сколько тебе лет?");

if(age < 0){
    alert("Ошибка!!!");
}else if(age <= 16){
    alert(`Привет, ${name}! Вы подросток!`);
}else if(age >= 17 && age <= 40){
    alert(`Привет, ${name}! Вы молодой человек!`);
}else if(age >= 41){
    alert(`Привет, ${name}! Вы старичок!`);
} 
