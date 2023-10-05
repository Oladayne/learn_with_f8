// phạm vi toàn cục 
var a = 10;
function sum() {
    // phạm vi hàm : function scope 
    var total = 0;
    if (total <= 0) {
        // phạm vi khối : BLock Scope
        return -1;
    }
}
/*
 LET CONTS : không có hoisting
 - chỉ hoạt động trong phạm vi mà biến được khai báo và các phạm vi con 
 - chỉ được khai báo 1 lần trong 1 phạm vi 
 let : được phép thay đổi 
 conts: không được phép thay đổi, khai báo phải gán luôn 
 */
for (let i = 1; i <= 10; i++){
    console.log(i);
}
const use = {
    name: "Hoàng An",
};
use.name = "Hoàng An F8";
// use = "hello"
// ví dụ của việc không có hoisting 
console.log(c);
let c = 10;