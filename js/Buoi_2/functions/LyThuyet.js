var a = 10;
var b = 20;
var c = a + b;


function getMesage(msg,type="success") {
    console.log("Hello: " + msg)
    console.log("Type: "+type)
}
getMesage("f8");
// msg là tham số
// F8 là đối số của msg 
function sum(a = 3, b = 2) {
    var total = a+b
    console.log(total)
}
sum()
