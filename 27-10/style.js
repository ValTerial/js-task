let newUser = prompt('Кто пришел');
let pas
if (newUser === 'Админ'){
    pas = prompt('Пароль')
}else if (newUser == null){
    alert('Вход отменен')
}else if (newUser ){
    alert('Я вас не знаю')
}
if (pas === 'Черный властелин'){
    alert('Добро пожаловать!')
}else if (pas == null){
    alert('Вход отменен')
}else if (pas){
    alert('Пароль не верен')
}
console.log(newUser+pas);



