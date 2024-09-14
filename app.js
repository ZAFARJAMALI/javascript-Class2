// TUTORIAL 02
// *OPERATORS & CONDITIONAL STATEMENT
//     1 LOOP & STRING 
//     2 ARRAYS
//     3 FUNCTIONS 
//     4 OBJECT
//     5 DOM & EVENTS
//     6 API CALLS

// ARTIMETIC OPERATORS
// +,-,*,/,
// 01 modulus % ,eg :2%5 =1;{1 remider is modulus}
// 02 Exponentiation , eg :(2**3)OR 2^3= 2*2*2
// 03 Increment 
// 04 Decrement

let a = 5;
let b = 20;
let c = a+b
let d = 2;

console.log("a=",a , "& b=",b,"& c=",c, "& d=",d);
console.log("a + b =",a + b);
console.log("c=",a+b),
console.log("c * d =",c * d );
 console.log("b/ a =",b / a);

 // MODULUS 

 console .log("a%b=",a%b);
 console.log("a**d",a**d);
 
 //unary operators
 //increment OR decrement
 let e = 3;
 let f = 5;
 console.log("e =",e,"& f=",f);
 e = e + 1 ; // (e++;)4
 f--; //(f-1;)4
 console.log("e=",e);
 console.log("f=",f);

 let g = 8;
let h = 7;
 console.log("g++ =",g++); //8
 console.log ("g=",g); //9
 
 console.log("--h=",--h);

 //ASSIGNMENT OPERATORS

 let i = 9;
let j = 3;

i += 2;
j -=1
i /=j;
console.log("i=",i);
console.log("j=",j);
console.log("i=",i);
a %= 4;
console.log("a=",a);

//EXPONENTIATION OPERATORS
let k = 2;

k **= 4;
console.log("k=",k);

//COMPARISON OPERATORS
let l = 5;
let m =3;
console.log("5 == 3" ,l == m); //false
 
let n = 5;
let o =5;
let p = "5"
console.log("n == o",n == o); //true 
console.log("o == p",5 == "5");//true (not check data thay they give true answer)
//not equal to (!=)
console.log("5 != 5",n != o); //false 

//equal to OR not equal to & type {strictly check data type;string ,number}
let q = 6;
let r = "6";
console.log("q === r",q === r); //false
console.log("6 !== '6'",q !== r); //true

  //greater than / less than OR greater than equal to /less than equal top

  //greater than OR greater than equal to
console.log("n > m",5 > 3); //true 
console.log ("n >= m",5 >= 3); //true
console.log("n >= o",5 >= 5); //true 
console.log("n >= q",5 >= 6 ); //false
console.log("o >= p",5 >= "5"); //true

//less than OR less than equal to
console.log("q < r",6 < "6"); //false 
console.log ("5 < 6",l < q); //true 
console.log("5 <= 5",n <= o); //true
 console .log ("5 <= 3",l <= m); //false

//LOGICAL OPERATORS
   //*AND(&&)operators
let cond1 = 8 > 6;
let cond2 = 9 > 7;
let cond3 = 4 > 5;
let cond4 = 3 < 2;

console.log("8 > 6 && 9 > 7 =",cond1 && cond2 ); //true 
console.log("8 > 6 && 4 > 5 =",cond1 && cond3 ); //false
// logical 0R (||)operator
console.log("cond1 || cond3 =", 8 > 6 || 4 > 5); // true 
console.log("cond3 || cond4 =",4 > 5 || 3 < 2); //false 


//logigal NOT(!)operator
console.log("!(5 < 3)=",!(l < m)); //true 
console.log("!(5 > 3)=",!(l > m)); //false 

               //CONDITIONAL STATEMENT 

let age = 18;
if (age >= 18){
  console.log("You can eligible for participate")
};
if (age < 18){
console.log("you can not eligible for participate")
};


let mode = "dark";
let color;

if (mode === "dark") { // Compare to string "dark"
  color = "black";
}

if (mode === "light") { // Compare to string "light"
  color = "white"; // Ensure "white" is a string
}
console.log(color); // This will output "black"

// else condition
let zafar = 17;
let wedding;
if(zafar >= 18){
  wedding ="Zafar you are eligble for weddind"
}else{
wedding = "Zafar you are not eligible for wedding"
}
console.log(wedding); // result is not ligible 

let mark = 19;
if (mark > 18 ){
  console.log("eligible for vote")
}else{
  console.log("not eligible for vote")
}

// how can we check odd & even number 

let num = 10;
let no = 13;
if(num % 2 === 0){
  console.log(num,"is even")
}else{
  console.log(num,"is odd") // resul is even

}
if (no % 2 === 0){
  console.log(no,"is even")
}else {
  console.log(no,"is odd") // resul is odd
}

//else-if statement
let Age = 18;
if(Age <= 18 ){
  console.log("junior student") // result is junior student
}else if( Age > 25){
  console.log ("senior student") 
}else{
  console.log("new student")
}


// TURNERY OPERATORS / SIMPLER ,COMPACT if-else

let richard = 25;
let result = richard >= 18 ? "adult" : "not adult"; //resul is not adult 
console.log (result);

// SWITCH CASE CONDITION  

let vagitable = "mango";
switch(vagitable){
  case "orange":
  console.log("oranges are short in market");
  break;
  case "apple":
  console.log("apple is my brother favourite" );
  break;
  case "mango":
  console.log("mango is my favourite ");
  break;
  default:
    console.log("vagitable is not available")
};

//PRACTICE QUESION:01 "Get user imput a number using prompt("Enter a number :");.check if the number is a multiple of 5 or Not ."
let Num =prompt("Enter a number:");
if(Num % 5 === 0){
  console.log(Num," is a multi[ple of 5")
}else{
  console.log (Num," is Not a multiple of 5")
};

// PRACTICE QUESTION 2:"Write a code which can give grades to students according to their scores"
// 90 TO 100,A 
// 70 TO 89,B 
// 60 TO 69,c
// 50 TO 59 ,D 
// 0 TO 40,F 

let score = 85;
let grade;
if(score >= 90 && score <=100){
  grade ="A"
}else if (score >= 70 && score <=89){
  grade ="B"
}else if (score >=60 && score <= 89){
  grade = "C"
}else if(score >= 50 && score <= 59){
  grade = "D"
}else if (score >= 0 && score <= 40){
  grade ="F"
};
console.log("grade =",grade); // resul is B 

//lecture 2 completed 












 










