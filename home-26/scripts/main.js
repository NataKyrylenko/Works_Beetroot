let w = 0.1;
let e = 0.2;
let r = +w + e;
alert( r.toFixed(1) );

let t = "1";
let y = 2;
let u = +t + y;
alert(u);

const o = '0.82'; 
let size=prompt(`вкажи обсяг флешки ГБ`);
let total = size / o;
alert('Файлів ' +total + 'МВ вміститься в флешку');

const chocolate = "25";
let goins=prompt('How mach money do you have?');
let general = goins / chocolate;
alert(parseInt(general)+ ' chocolate you buy');
alert(goins%chocolate + ' your balance');



let l=prompt('Enter any 3 numbers');
let n = 0;
for(; l; l = Math.floor(l / 10)) {
    n *= 10;
    n += l % 10;
}
alert(n);


let g =prompt('Введіть суму вкладу на 2 місяці');
let z = g/100*5;
alert(z + ' нараховані відсотки');

alert(2 && 0 && 3); // 0 - тому що це перше невірне значення
alert(2 || 0 || 3); // 2 - тому що це перше істинне значення
alert(2 && 0 || 3);// 3 - (результатом 2 && 0 буде 0, тому результатом 0 || 3 буде 3 - це істинне значення).