// Arrow Function
// loại không tham số 
const getMessage = () => {
    console.log("hello boy");
}
getMessage();
// loại có 1 tham số 
const getMessagee = msg => {
    console.log(msg);
}
getMessagee('f8');
// loại nhiều tham số 
const getTotal = (a , b) => {
    console.log(a+b);
}
getTotal(5, 10);
// loại có return 
const sum = (a, b) => a + b;
console.log(sum(5, 10));
const getUser = () => ({ name: 'Hoàng An', email: 'hoangan@gmail.com' }) 
console.log(getUser());
// ví dụ áp dụng callback 
const user = [
    {
        id: 1,
        name:"user1"
    },
    {
        id: 2,
        name:"user2"
    },
    {
        id: 3,
        name:"user3"
    }
]
const id = 2;
// lấy thông tin user từ id 2 
const info = user.find((user) => user.id === id);
console.log(info);
// ví dụ với setTimeOut 
setTimeout(() => {
    console.log('hello');
}, 1000);
//arrow function với closure 
const div = (a) => (b) => a / b;
var result = div(10);
console.log(result(5));
console.log(result(2));
//arrow function với IIFE
(() => {
    console.log('abc');
})
// nguyễn tắc khi làm việc với arrow function
/*
-không dùng để thay thế function truyền thống 
-không biding dc this 
-không biding đươc arguments
-không nên sử dụng làm method của object
-không có hoisting
-không được sử dụng làm để xây dụng làm tạo constructor 
-không có thuộc tính prototype 
 */
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    console.log(this);
    console.log(e.target);
})
const customer = {
    name: 'Hoàng An',
    email: "hoangan@gmail.com",
    getinfo: function() {
        return this.name + ' - ' + this.email;
    }
}
console.log(customer.getinfo());

// const Customer = () => {
//     this.name = 'Hoàng An';
//     this.email='hoangan.web@gmail.com'
// }
// Customer.prototype.message = 'hello'
// const customerr = new Customer
// SAI
Array.prototype.getLength = function() {
    console.log(this);
}// nếu để trường hợp "=>" arrow funcrion nó sẽ chuyển lên window
// đã thay thế bởi mảng truyền thống 
const lists = [1, 2, 3];
lists.getLength()
/**
 * destructuring
 * spread operator
 * enhance object literral
 * classes
 + cú pháp
 + kế thừa 
 + static 
 + setter, getter
 */