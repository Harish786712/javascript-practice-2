/*DataTypes
Task 1
Create a variable name and store "Naveen".
Print the value.*/

/*let username = "Naveen";
console.log(username);
ans: Naveen*/



/*Task 2
Print the datatype of "JavaScript" using typeof.*/
/*console.log(typeof("JavaScript"))
ans: string*/

/*Task 3
Create a variable age = 22.
Print the datatype.*/

/*let age = 22;
console.log(typeof(age));
ans: number */

/*Task 4
Create a boolean variable isStudent = true.
Print the datatype.*/

/*let isStudent = confirm("Are u a student");
console.log(typeof(isStudent));
ans: boolean*/

/*Task 5
Create a variable salary without assigning a value.
Print the value.*/

/*let salary;
console.log(salary);
ans: undefined*/

/*Array Tasks
Task 6
Create an array fruits with 5 fruit names.
Print the entire array.*/

/*let fruits = ["apple", "banana", "dragonfruit", "watermelon", "orange"];
console.log(fruits);*/

/*Task 7
Print the first element of the fruits array.*/
/*let fruits = ["apple", "banana", "dragonfruit", "watermelon", "orange"];
console.log(fruits[0]);*/

/*Task 8
Print the third element of the array.*/
/*let fruits = ["apple", "banana", "dragonfruit", "watermelon", "orange"];
console.log(fruits[2]);*/

/*Task 9
Print the last element using length.*/
/*let fruits = ["apple", "banana", "dragonfruit", "watermelon", "orange"];
console.log(fruits[fruits.length-1]);*/

/*Task 10
Create an array numbers = [10,20,30,40,50].
Print the second and fourth elements.*/
/*let numbers = [10, 20, 30, 40,50];
console.log(numbers[1]);
console.log(numbers[3]);*/

/*Object Tasks
Task 11
Create an object person with properties:
name
age
city
Print the object.*/

/*let person = {
    username : "Harish",
    age : 20,
    city : "Chennai"
}
console.log(person);*/

/*Task 12
Print the name from the person object.*/
/*let person = {
    username : "Harish",
    age : 20,
    city : "Chennai"
}
console.log(person.username);*/

/*Task 13
Add an array property skills inside person.
Example:
skills : ["HTML","CSS","JS"]
Print the second skill.*/
/*let person = {
    username : "Harish",
    age : 20,
    city : "Chennai",
    skills : ["HTML","CSS","JS"]
}
console.log(person.skills[1]);*/

/*Task 14
Create object carDetails
brand
model
price
Print the brand.*/
/*let carDetails = {
    brand : "BMW",
    model : "i8",
    price : "2.5cr"
}
console.log(carDetails.brand)*/

/*Task 15
Create object fruitCategory
red:["apple","cherry"]
yellow:["banana","mango"]
green:["kiwi","grapes"]
Print the first yellow fruit.*/

/*let fruitCategory = {
    red : ["cherry", "redbanana"],
    yellow : ["banana", "mango", "papaya"],
    green : ["watermelon", "greenbanana", "greenapple"],

}
console.log(fruitCategory.yellow[0]);*/

/*Arithmetic Operators
Task 16
Create variables
let a = 8
let b = 4
Print the result of a + b.*/

/*let a = 8;
let b = 4;
console.log(a+b);
ans: 12*/

/*Task 17
Print the result of a - b.*/
/*let a = 8;
let b = 4;
console.log(a-b);
ans: 4*/

/*Task 18
Print the result of a * b.*/
/*let a = 8;
let b = 4;
console.log(a*b);
ans: 32*/

/*Task 19
Print the result of a / b.*/
/* let a = 8;
let b = 4;
console.log(a/b);
ans: 2 */

/*Task 20
Print the result of a % b.*/
/* let a = 8;
let b = 4;
console.log(a%b);
ans: 0 */

/*Exponential Operator
Task 21
Calculate 3 ** 2.*/
//console.log(3**2); ans: 9

/*Task 22
Calculate 2 ** 4.*/
//console.log(2**4);  ans: 16

/*Increment / Decrement
Task 23
let num = 5
num++
Print the value.*/
/*let num = 5
num++
console.log("value of num :- ",num)
ans: 6*/

/*Task 24
let num = 10
num--
Print the value.*/
/* let num = 10
num--
console.log("value of num :- ",num);
ans: 9 */

/*Task 25
let x = 6
let y = x++
Print x and y.*/
/* let x = 6
let y = x++
console.log(x)
console.log(y)
ans: 7 6 */

/*Task 26
let a = 4
let b = ++a
Print both values.*/
/*let a = 4
let b = ++a
console.log(a, b);
ans: 5 5*/

/*Assignment Operators
Task 27
let value = 10
value += 5
Print the result.*/
/*let value = 10
value += 5
console.log(value)
ans: 15*/

/*Task 28
let value = 20
value -= 3
Print result.*/
/*let value = 20
value -= 3
console.log(value);
ans: 17*/

/*Task 29
let value = 6
value *= 2
Print result.*/
/*let value = 6
value *= 2
console.log(value);
ans: 12*/

/*Task 30
let value = 20
value %= 3
Print result.*/
/*let value = 20
value %= 3
console.log(value);
ans: 2*/

/*Comparison Operators
Task 31
Print result of
10 == "10"*/

/* 10 == "10";
console.log(10 == "10");
ans: true */

/* Task 32
Print result of
10 === "10" */
/* console.log(10 === "10");
ans: false */

/* Task 33
Print result of
15 > 20 */
/* console.log(15 > 20);
ans: false */

/* Task 34
Print result of
5 <= 5 */
/* console.log(5 <= 5);
ans: true */

/* Logical Operators
Task 35
Print result of
10 > 5 && 5 > 2
 */
/* console.log(10 > 5 && 5 > 2);
ans: true */

/* Task 36
Print result of
10 < 5 || 8 > 2 */
/* console.log(10 < 5 || 8 > 2);
ans: true */

/* Task 37
Print result of
!(5 === "5") */
/* console.log(!(5 === "5"));
ans: true */

/* Ternary Operator
Task 38
let age = 20
Use ternary to print:
"Adult"
"Minor" */
/* let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");
 */

/* Task 39
let password = 1
Use ternary to print
"Login success"
"Wrong password" */

/* let password = 1;
console.log(password === 1 ? "Login Success" : "Wrong password");
 */

/* String Operations
Task 40
Create two variables
let firstName = "Spider"
let lastName = "Man"
Print using:
Concatenation +
Template string `${}
 */
/* let firstName = "Spider"
let lastName = "Man"

console.log(firstName + lastName);
console.log(`${firstName}${lastName}`);
 */


















