var getMesage = function () {
    console.log("Hoàng An F8");
};
getMesage();
var a = function () {
    return "fun a";
}
//kiểm tra 1 biến có phải function hay không 
if (typeof a === "function") {
    console.log(a());
} else {
    console.log(a);
}

//ví dụ cho việc 1 hàm có nhiều tên 
var a = function (name) {
    console.log("fun a", name);
};
var b = a;
var c = b;
c("f8")

// call back 
var getA = function (fn) {
    console.log("getA");
    if (typeof fn === "function") {
        fn()
    }
};
var getB = function () {
    console.log("getB");
}
var getC = function () {
    console.log("getC");
}

//REST PARAMETER
getA(getC)
var getA = function (fn, ...arg) {
    console.log("getA");
    if (typeof fn === "function") {
        fn(...arg);
    }
};
var getB = function () {
    console.log("getB");
}
var getC = function (name, email) {
    console.log("getC", name, email);
}
getA(getC, "Hoàng An", "admin@fullstack.edu.vn")

// dùng 1 hàm ko tham số để gọi 1 hàm có tham số 
getA(function () {
    getC("hoàng an", "hoangan.web@gmail.com")
})

//setimeout
var handleTimeout = function (name) {
    console.log("F8", name);
};
setTimeout(handleTimeout, 1000, "f8");
// setInterval lặp lại 1 chương trình sau 1 khoảng thời gian 
var count = 0;
var id = setInterval(function () {
    console.log(`lan lặp thứ: ${++count}`);
    if (count === 10) {
        clearInterval(id);
    }
}, 1000);

// iife
(function () {
    console.log("f8");
})();
(function (name) {
    console.log("f8",name);
})("an");
