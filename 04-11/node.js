//1
function task_1(){
    let arr = [];
    while (true){
        const num = +prompt('Ведите число');
        if (num === 0)break;
        if (isNaN(num))
    }
}
//2
/*
const arr = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
const sum = arr.reduce((sum, item) => {
    if (item > 0){
        return sum + item;
    }else {
        return sum;
    }
}, 0);
console.log(sum)
*/

//3
const numbers = (a = 0, b = 0) => a === b ? 0 : a > b ? 1 : -1;
console.log()

