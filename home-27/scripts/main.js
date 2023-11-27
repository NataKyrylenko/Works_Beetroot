
function getNumber(id) {
return parseInt(document.getElementById(id).value);
}

function addition() {
  let a = getNumber("a");
  let b =getNumber("b");
  let c = a + b; 
   createBkg(c);
}

function subtraction() {
  let a = getNumber("a");
  let b =getNumber("b");
  let c = a - b;
  c=Math.max(c,0);
  createBkg(c); 
}

function createBkg (value) {
  document.getElementById("result").innerHTML = value;
 if ( value <= 10 ) {
    document.body.style.background = "rgb(121 230 97)";
  }else {
    document.body.style.background = "#d4d448";
  }
}













