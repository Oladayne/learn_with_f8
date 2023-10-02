var showMessage = function () {
    var display = function () {
        console.log(`xin chào f8`);
    };
    display()
};
showMessage();


var showMessage = function (msg) {
    var value = "fullstack";
    //biến cục bộ của hàm cha 
    var display = function () {
        console.log(`xin chào f8`);
        console.log(value)
    };
    display()
};
showMessage("Hoàng An");
// tái sử dụng được các biến
//     - tham số của hàm cha
//     - biến toàn cục
//     - biến cục bộ của hàm cha


var sum = function (a) {
    var getTotal = function (b) {
        return a + b;
    };
    return getTotal;
};
//closure
var add = sum(10);
console.log(add(20));

// đệ quy
// gọi lại chính nó trong điều hiện khác
// ví dụ 
var showMessage = function (n) {
    console.log(n);
    if (n > 1) {
        showMessage(n - 1);
    }
};
showMessage(10)

var getTotal = function (n) {
    console.log(n);
    if (n === 1) {
        return 1;
    }
    var total = n + getTotal(n - 1);
    return total; 
};
console.log(getTotal(10));