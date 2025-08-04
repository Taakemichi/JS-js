// -------------Datatypes------------
/*var myName ="Jatin Sharma";
    const myAge = 19;
    var isStudent = true ;
    console.log(myName);
    console.log(typeof myName);
    console.log(myAge);
    console.log(typeof myAge );
    console.log(isStudent);
    console.log(typeof isStudent );
    ---variables ----------
    let city = "Delhi";
    const country = "India";
    var pincode = 160041;

    city = "chandigarh";   
    pincode = 160042;
    console.log(city);
    console.log(country);
    console.log(pincode);*/

//----------Arthmatic Operators--------
/*const num1 = 25;
    const num2 = 25;
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1/num2);
    console.log(num1%num2);

    let num1 = prompt("enter number1")
    let num2 = prompt("enter number2")

    num1 = Number(num1);
    num2 = Number(num2);

        let sum = num1 + num2;
        let diff = num1 - num2;
        let multi = num1*num2;
        let divi = num1/num2;
        let rem =num1%num2;
        
        alert("sum="+sum + "diff="+diff + "multi="+multi + "divi="+divi + "rem="+rem);    // -------------Datatypes------------
    /*var myName ="Jatin Sharma";
    const myAge = 19;
    var isStudent = true ;
    console.log(myName);
    console.log(typeof myName);
    console.log(myAge);
    console.log(typeof myAge );
    console.log(isStudent);
    console.log(typeof isStudent );
    ---variables ----------
    let city = "Delhi";
    const country = "India";
    var pincode = 160041;

    city = "chandigarh";   
    pincode = 160042;
    console.log(city);
    console.log(country);
    console.log(pincode);*/

//----------Arthmatic Operators--------
/*const num1 = 25;
    const num2 = 25;
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1/num2);
    console.log(num1%num2);

    let num1 = prompt("enter number1")
    let num2 = prompt("enter number2")

    num1 = Number(num1);
    num2 = Number(num2);

        let sum = num1 + num2;
        let diff = num1 - num2;
        let multi = num1*num2;
        let divi = num1/num2;
        let rem =num1%num2;
        
        alert("sum="+sum + "diff="+diff + "multi="+multi + "divi="+divi + "rem="+rem);*/

        //---------------------Statements-------------------

        /*let num1 = prompt ("enter your no.")
        num1 = Number (num1);

        if (num1%2==0) {
            alert(num1 + "is a even no.")
        }
else {
    alert(num1 + "is a odd no ")
};*/

//------------------------If-Else--------------
 /*let age = prompt("Enter your Age");
 age = Number (age);

 if (age>=18 && age<80 ) {
    alert(age + "is Elligible for Driving Licence")  
    }
 else{
    alert("You are not Elligible for Driving licence")
 };

 let marks =prompt("enter your marks");
 marks = Number(marks);
if (marks<=33 && marks>=0) {
    document.writeln("you are fail, practice hard")
}
else if (marks<=44 && marks>=33){
document.writeln("you got D,give some attention to maths")
}
else if (marks<=59 && marks>=45){
document.writeln("you got C,practice more")

}
else if (marks<=74 && marks>=60){
document.writeln("you got B ,Good, just practice.")
}
else if (marks<=89 && marks>=75){
document.writeln("you got A ,very good,you nailed it ")

}
else if (marks<=100 && marks>=90){
document.writeln("you got A+,Perfect!!")

}
else {
document.writeln("please enter a valid no. , between 0-100")
    
};*/
///////////////// mini calculator//////////////////
/*var num1= prompt("enter your number");
var num2= prompt("enter your number");
var oper= prompt("choose your operator");
num1 = Number(num1);
num2 = Number(num2);
if (oper === "+") {
    document.writeln(`${num1} + ${num2} = ${num1 + num2}`);
} else if (oper === "-") {
    document.writeln(`${num1} - ${num2} = ${num1 - num2}`);
} else if (oper === "*") {
    document.writeln(`${num1} * ${num2} = ${num1 * num2}`);
} else if (oper === "/") {
    document.writeln(`${num1} / ${num2} = ${num1 / num2}`);
} else if (oper === "%") {
    document.writeln(`${num1} % ${num2} = ${num1 % num2}`);
} else {
    document.writeln("❌ Invalid operator");
}
////////////////////////comparison numbers///////////////////////
let num1=prompt("select no.1")
let num2 =prompt("select no.2")
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
    document.writeln("num1 is Greater then num2")
} 
else if (num1 < num2){
    Document.writeln("num1 is lesser then num2")
}
else if (num1 = num2){
    document.writeln("both are eqauls")
}
else {
   ducument.writeln("invalid entry")
};*/

//////////Weather Clothing Addvisor///////////

let weather = prompt("Whats the Temperature today")
weather = Number(weather)

if (weather<=0) {
    alert("Please Wear a heavy jacket today")
} 
else if (weather<=15) {
    alert("Wear a Sweater")
}
else if (weather<=25){
alert("wear a light jacket");
}
else if (weather<=35){
alert("Wear summer clothes")
}
else {
    alert("stay hydrated and avoid sun")
}
console.log("thand to bohot hai")