 let myName = "Nata Kyrylenko";
 let firstName = "Natali Kyrylenko";
 let lastName = 'NataKyrylenko';

//let Username;
//let user Name;

/*let UserName;
  let 1userName;
  let user-name*/ 

let userName=prompt("What's your name?");
alert('Hello ' + userName);

const year = '2021';
let yearBirth=prompt("What's your year of birth?");
let total = year - yearBirth;
alert('you are ' + total);

let sideSquare=prompt("Enter the side of the square");
let perimetr = sideSquare * 4;
alert('The perimeter of the square is ' + perimetr);

const p = '3.14'
let radiusCircle=prompt("Enter radius of the circle");
let area = p * radiusCircle*2;
alert('The area of the circle is ' + area);

let distance=prompt("Enter the distance (km) to the city");
let time=prompt("Enter the time to get there");
let speed = distance/time;
alert('Your`s speed ' + speed + 'km/h');

const euro = '30.5';
let dollars=prompt("Enter the dollars to convert euro")
let convert = dollars*euro;
alert(convert + ' euro');