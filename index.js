var sub1 = +prompt("Enter Your 1ST Number");
var sub2 = +prompt("Enter Your 2ND Number");
var sub3 = +prompt("Enter Your 3RD Number");
var sub4 = +prompt("Enter Your 4TH Number");
var sub5 = +prompt("Enter Your 5TH Number");

var obtainedNumber = sub1 + sub2 + sub3 + sub4 + sub5;

alert("Your Obtained Number is " + obtainedNumber);

var totalNumber = 500;

var percentage = obtainedNumber / totalNumber * 100;

alert("Your Percentage is " + percentage + "%");

if (percentage >= 80) {
    alert("Congratulation You Got A1")
    alert("Exellent Work")
}else if(percentage >= 70) {
    alert("Congrtulation You Got A")
    alert("Good Work")
}else if(percentage >= 60) {
    alert("Congratulation You Got B")
    alert("Need To Hard Work")
}else if(percentage < 60){
    alert("Alas! Your Are Failed")
    alert("Sorry Try Again Later")
}
    