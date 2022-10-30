let item_1 = 5;
console.log(item_1);
//////////////////////////////////////////////////
let item_2 = 3;
console.log(item_2);
//////////////////////////////////////////////////
let item_3 = item_1+item_2;
console.log(item_3);
//////////////////////////////////////////////////
let item_4 = 'Yolochka';
console.log(item_4);
//////////////////////////////////////////////////
console.log(item_3+item_4);
//////////////////////////////////////////////////
console.log(item_3*item_4);
//////////////////////////////////////////////////
let item_6 = 15;
let item_6_type = typeof(item_6);
console.log("item_6"==item_6);
console.log("item_6_type"==item_6_type);
//////////////////////////////////////////////////
let item_7 = "item_6";
let item_7_type = typeof(item_7);
console.log("item_7"==item_7);
console.log("item_7_type"==item_7_type);
//////////////////////////////////////////////////
let age_1 = 10;
undefined
let age_2 = 18;
undefined
let age_3 = 60;
undefined 
if (age_1 < age_2) {
 console.log('You don’t have access cause your age is' + age_1 + 'It’s less then');
}
//////////////////////////////////////////////////
if ((age_1 >= age_2) && (age_1 < age_3)) {
    alert ('Welcome !');
  }
//////////////////////////////////////////////////
if (age_1 < age_3) {
    alert ('Keep calm and look Culture channel'); 
   }
//////////////////////////////////////////////////
if (age_1 < age_2) {
    alert ('You don’t have access cause your age is' + age_1 + 'It’s less then'); 
   } else if ((age_1 >= age_2) && (age_1 < age_3)); {
     alert ('Welcome !');
   }  if (age_1 < age_3); {
    alert ('Keep calm and look Culture channel'); 
   }  {
     alert ('Technical work');
   }    
//////////////////////////////////////////////////////////

   function CheckAge(age){
    if (age < age_2) {
      alert ('You don’t have access cause your age is' + age + 'It’s less then'); 
     } else if ((age >= age_2) && (age < age_3)); {
       alert ('Welcome !');
     }  if (age < age_3); {
      alert ('Keep calm and look Culture channel'); 
     }  {
       alert ('Technical work');
     }     
   }
   age = prompt("Введите ваш возраст ");
CheckAge(17);
CheckAge(18);
CheckAge(61);
////////////////////////////////////////////////////
function CheckAge(age){
  if (typeof(age)!=Number){
    prompt ("Ошибка! Введите свой возвраст числом ")
  }
  if (age < age_2) {
    alert ('You don’t have access cause your age is' + age + 'It’s less then'); 
   } else if ((age >= age_2) && (age < age_3)); {
     alert ('Welcome !');
   }  if (age < age_3); {
    alert ('Keep calm and look Culture channel'); 
   }  {
     alert ('Technical work');
   }     
 }
 age = prompt("Введите ваш возраст ");
/////////////////////////////////////////////////
 age = prompt("Введите ваш возраст ");
 function CheckAge(age){
  if ((typeof(age)==String) && ((age)<"10")); {
    let Age = Number(age);
  }
  if (Age < age_2) {
    alert ('You don’t have access cause your age is' + Age + 'It’s less then'); 
   } else if ((Age >= age_2) && (Age < age_3)); {
     alert ('Welcome !');
   }  if (Age < age_3); {
    alert ('Keep calm and look Culture channel'); 
   }  {
     alert ('Technical work');
   }     
 }
 /////////////////////////////////////////////////////

 const a = 2;
 var n = 1;
  while (n<=10) {
    alert('a**n');
    n++;
  } 
 
///////////////////////////////
  function deg(n){
    a ** n;
  }
////////////////////////////////////
  let str = ':)';
  for (let i = 1; i <= 5; i++){
    console.log(str.repeat(i));
    }
//////////////////////////////////

const printSmile = function (stroka, numberOfRows){
	stroka=String(stroka);
for (let i = 1; i <= numberOfRows; i++){
	console.log(stroka.repeat(i));
}
}