// chế độ nghiêm ngặt của JS cgiups lập trình viên giảm thiểu các lỗi ngầm giúp sản phẩm tương thích trên tất cả các trình duyệt
// sử dụng "use strict"
"use strict"
var a = 10;// nếu không để var thì sẽ báo lỗi 
console.log(a);
// sau khi sử dụng use strict thì trên devtool sẽ báo lỗi chưa khai báo 
var user = {
    name: "Hoàng An",
};
// delete user; trường hợp báo lỗi
delete user.name
console.log(user);


// hoisting
// cơ chế mặc định của JS giúp đẩy các phần khai báo của biến và hàm lên trước phần thực thi
// biến
// chỉ đẩy phần khai báo, không đẩy giá trị
// chỉ tồn tại với từ khóa var
// hàm
// chỉ hỗ trợ hàm declaration
//declaration 
function getA() { }
//expression
var getB = function () { };

a = 10;
console.log(a);
var a;

console.log(b);
var b = 10;

getMessage();
function getMessage() {
    console.log("hello f8");
}