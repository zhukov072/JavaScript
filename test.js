
//     Создать переменную “item_1”
//     Присвоить переменной item_1 цифру 5.
//     Вывести в консоль item_1.
//     Создать переменную “item_2”
//     Присвоить переменной item_2 цифру 3.
//     Вывести в консоль item_2.
//     Создать переменную “item_3”
//     Присвоить переменной item_3 сложение item_1 и item_2.
//     Вывести в консоль item_3.
//     Создать переменную “item_4”
//     Присвоить переменной item_4 строку “Yolochka”
//     Вывести в консоль item_4.
//     Вывести в консоль сложение item_3 и item_4.
//     Вывести в консоль умножение item_3 и item_4.
//     Создать переменную “item_5”
//     Присвоить переменной item_5 переменную item_3
//     Создать переменную item_6.
//     Создать переменную item_6_type
//     Присвоить переменной item_6 значение 15
//     Присвоить переменной item_6_type тип переменной item_6
//     Вывести в консоль тип данных item_6 в виде —— “item_6 == ” item_6, “item_6_type == ” item_6_type ——
//     Создать переменную item_7 и в ней преобразовать item_6 в String.
//     Создать переменную item_7_type
//     Присвоить переменной item_7_type тип переменной item_7
//     Вывести в консоль тип данных item_7 в виде —— “item_7 == ” item_7, “item_7_type == ” item_7_type ——
//     Создать переменную “age_1” и присвоить ей значение 10
//     Создать переменную “age_2” и присвоить ей значение 18
//     Создать переменную “age_3” и присвоить ей значение 60
//     Создать if в котором будите проверять значение переменной age_1
//     Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//     Если age_1 >= age_2 и age_1 < age_3, вывести в консоль “Welcome !”
//     Если age_1 > age_3, вывести в консоль “Keep calm and look Culture channel”.
//     Иначе выводите “Technical work”.

// I* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Пример: const checkAge = function(age) { Ваши преобразования } Вывести в консоль результат работы функции с возрастами 17, 18, 61

// II* Преобразовать задание I* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// III* Преобразовать II* таким образом, чтобы значение '2' (строка, в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// IV* Преобразовать задание III* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке

//     Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//     Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее Пример в консоли: :) :):) :):):) :):):):) :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

let item_1 = 5
console.log(item_1)
//////////////////////////////////////////////////
let item_2 = 3
console.log(item_2)
//////////////////////////////////////////////////
let item_3 = item_1+item_2
console.log(item_3)
//////////////////////////////////////////////////
let item_4 = 'Yolochka'
console.log(item_4)
//////////////////////////////////////////////////
console.log(item_3+item_4)
//////////////////////////////////////////////////
console.log(item_3*item_4)
//////////////////////////////////////////////////
let item_6 = 15
let item_6_type = typeof(item_6)
console.log("item_6"==item_6)
console.log("item_6_type"==item_6_type)
//////////////////////////////////////////////////
let item_7 = "item_6"
let item_7_type = typeof(item_7)
console.log("item_7"==item_7)
console.log("item_7_type"==item_7_type)
//////////////////////////////////////////////////
let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
 console.log('You don’t have access cause your age is' + age_1 + 'It’s less then')
}
//////////////////////////////////////////////////
if ((age_1 >= age_2) && (age_1 < age_3)) {
  console.log('Welcome !')
  }
//////////////////////////////////////////////////
if (age_1 < age_3) {
  console.log('Keep calm and look Culture channel')
   }
//////////////////////////////////////////////////
if (age_1 < age_2) {
  console.log('You don’t have access cause your age is' + age_1 + 'It’s less then') 
   } else if ((age_1 >= age_2) && (age_1 < age_3)) {
    console.log('Welcome !')
   } else if (age_1 < age_3) {
    console.log('Keep calm and look Culture channel') 
   } else {
    console.log('Technical work')
   }    
//////////////////////////////////////////////////////////
function CheckAge(age){
  let age_2 = 18
  let age_3 = 60
  if (age < age_2) {
    console.log('You don’t have access cause your age is' + age +'It’s less then' + age_2)
   } else if ((age >= age_2) && (age < age_3)) {
    console.log('Welcome !')
   } else if (age > age_3) {
    console.log('Keep calm and look Culture channel')
   } else {
    console.log('Technical work')
   }     
 }

 CheckAge(17)
 CheckAge(18)
 CheckAge(61)
//////////////////////////////////////////////////
function CheckAge(age){
  let age_2 = 18
  let age_3 = 60
  if (typeof age!='number'){
    console.log("Ошибка! Введите свой возвраст числом ")
  } else if (age < age_2) {
    console.log('You don’t have access cause your age is' + age + 'It’s less then' + age_2)
   } else if ((age >= age_2) && (age < age_3)) {
    console.log('Welcome !')
   } else if (age < age_3) {
    console.log('Keep calm and look Culture channel') 
   } else {
    console.log('Technical work')
   }     
 }
 CheckAge('Много, сударь, много - 18')
 CheckAge('107 до н.э.')
 CheckAge(18)
///////////////////////////////////////////////

 function CheckAge(Age){
  let age_2 = 18
  let age_3 = 60
  if (isNaN(Age) || (typeof Age!='number')) {
    console.log ("Ошибка! Введите свой возвраст числом ")
  } else if (Age < age_2) {
    console.log('You don’t have access cause your age is' + Age + 'It’s less then' + age_2)
   } else if ((Age >= age_2) && (Age < age_3)) {
    console.log('Welcome !')
   } else if (Age < age_3) {
    console.log('Keep calm and look Culture channel') 
   } else {
    console.log('Technical work')
   } 
  }

 CheckAge('dsc')
 CheckAge('10')
 CheckAge(20)
 /////////////////////////////////////////////////////
 function CheckAge(Age){
  let age_2 = 18
  let age_3 = 60
  if (isNaN(Age) || (typeof Age!='number')) {
    alert ("Ошибка! Введите свой возвраст числом ")
  } else if (Age < age_2) {
    alert('You don’t have access cause your age is' + Age + 'It’s less then' + age_2)
   } else if ((Age >= age_2) && (Age < age_3)) {
    alert('Welcome !')
   } else if (Age < age_3) {
    alert('Keep calm and look Culture channel') 
   } else {
    alert('Technical work')
   } 
  }

  let Alter = prompt('How old are you?');
CheckAge(Alter); 
 /////////////////////////////////////////////////////

 const a = 2
 var n = 1;
  while (n<=10) {
    console.log('a**n');
    n++;
  } 

// ///////////////////////////////
  function deg(n){
    const a = 2
    if (!isNaN(n) || n==0){
     res = (2 ** n)
      console.log(res) 
    }else if (n=String){
        console.log("Ошибка! Введите целое число")  
      }      
        
  else console.log("Ошибка! Введите целое число");
  }

  deg('3')
  deg('g')
  deg(0)
////////////////////////////////////
  let str = ':)';
  for (let i = 1; i <= 5; i++){
    console.log(str.repeat(i));
    }
////////////////////////////////

const printSmile = function PprintSmile(stroka, numberOfRows){
	stroka=String(stroka);
for (let i = 1; i <= numberOfRows; i++){
	console.log(stroka.repeat(i));
}
}
printSmile('ddd', 5)
printSmile(0, 5)