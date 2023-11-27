//------minimum------//

let shoppingList = [
    {name: 'bread', many: 2, bought: false, price: 16, summa: 32},
    {name: 'fish', many: 5, bought: false, price: 120, summa: 600},
    {name: 'orange', many: 8, bought: false, price: 20,summa: 160},
    {name: 'rice', many: 1, bought: true, price: 32, summa: 32},
    {name: 'shocolate', many: 4, bought: false, price: 30, summa: 120}

];
let myShoppingList = [];

//1
shoppingList.sort(function(a,b) {
    if (a.bought>b.bought) {
        return 1;  
    }
    if (a.bought<b.bought) {
        return -1;
  }
  return 0;
});
console.log(shoppingList);

//2
let product = prompt('enter product', '');
for (let key in shoppingList){
 if (shoppingList[key].name===product) {
    shoppingList[key].bought=true; 
 }
}

//3
for (let key in shoppingList){
console.log(shoppingList[key].name);
if (shoppingList[key].bought===false){
       myShoppingList += shoppingList[key].name + ' ';
 }        
}
console.log(`You must bought: ` + myShoppingList);

//------Norma------//
//1
console.log(myShoppingList);

//2
let addProduct = prompt('add product in list', '');
for (let key in shoppingList){
    //переписати умову
    if (!shoppingList[key].name.includes(addProduct)){
    shoppingList.push({name:addProduct ,many:1,bought:false,price:0,summa:0});   
    
    }
    if (shoppingList[key].name.includes(addProduct)) {
        shoppingList[key].many++;
        shoppingList[key].summa = shoppingList[key].price * shoppingList[key].many;
        
    }
    
     
 }   
console.log(shoppingList)






// for (let key in shoppingList){
//     if (addProduct === shoppingList[key].name) {
//         shoppingList[key].many++;
//         shoppingList[key].summa = shoppingList[key].price * shoppingList[key].many;
//             break 
//        }
//     if (addProduct !== shoppingList.name){
//      shoppingList.push({name:addProduct ,many:1,bought:false,price:0,summa:0});
//     break
//     } 
// }   


//------Max------//
//1
// let sum = 0;
// for (let key in shoppingList){
//  while (sum < shoppingList.length) {

//  }
// }

