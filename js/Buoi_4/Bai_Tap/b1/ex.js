// var fullname = "TẠ HOÀNG AN";
// var name = fullname === fullname.toUpperCase();
// console.log(name)


var fullname2 = "tạ hoàng an "
var fullname2 = fullname2.charAt(0).toUpperCase() + fullname2.slice(1);
for (var i = 0; i < fullname2.length; i++){
    var char = fullname2.charAt(i);
    if (char === " ") {
        var index = i + 1;
        fullname2 =
            fullname2.slice(0, index) +
            fullname2.charAt(index).toUpperCase() +
            fullname2.slice(index +1);
    }
}
console.log(fullname2);