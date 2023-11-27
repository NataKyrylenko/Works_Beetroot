               //----Minimum-----//
//1
//---Function declaration---//
/*function імя(параметри) {
    тіло функції
}
 імя() // виклик функції

//---Function expression---//

 let імя = function(параметри){
     тіло функції
 }
 імя() // виклик функції*/

 //2
function mainText(title, text, smile) {
    console.log(title + '.' + text + smile);
}
mainText('Я сильна.Це плюс', 'Але замахана...Це мінус', ':)');

//3
function mainNumber(num1, num2){
    if (num1 < num2){
        return -1;
    }else if(num1 > num2) {
        return 1;
    }else if (num1=num2) {
        return 0;
    }
}
let mainResult = mainNumber(3, 2); 
console.log(mainResult);

//4
function factorial(n) {
    return (n!= 1) ? n * factorial(n - 1) : 1;
  }
console.log(factorial(7));

//5
function crazyNumber(a,b,c) {
    return a+b+c;
}
let ret = crazyNumber('1', '4', '9');
let num = Number(ret);
console.log(num);

//6
function suare(length, width) {
    return length*width;
}
let lenght = prompt('enter lenght');
let width = prompt('enter width');
let fb = suare(lenght, width);
alert(`square ${fb}`);

               //----Norm----//
//1
function idealNumber(num) {
    let sum = 0;
    let over;
    for (let i = 1; i < num -1; i++) {
        over = num%i;
        if (over === 0) {
            sum += i;
        }
    }
    if (num ===sum) {
        console.log(num + ' - це досконале число')
    }else {
        console.log(num + ' - це не досконале число')
    }
}
idealNumber(28);
idealNumber(78);
idealNumber(8128);
idealNumber(345);

//2
function IdealNumbers(a, b) {
    for (let i = a; i<b; i++) {
        sum = 0;
        for (let n = 1; n <= i/2; n++) {
            if (i % n ===0) sum +=n;
        }
        if (i===sum) {
        console.log(i + ' - досконале число в заданому діапазоні');
        }
    }
}
IdealNumbers(1,500);



