// phá vỡ cấu trúc của Array , Object để truy cập vào các phần tử và gán thành các biến riêng biệt
//ví dụ 
const user = {
    name: "Hoàng An",
    email: "hoangan@gmail.com",
    age: "31",
    "address-shipping":"Hồ Chí Minh",
};
// const name = user.name; cách cũ
// const email = user.email;


// cách mới 
// const { name, email ,age} = user;
// console.log(name, email, age);
// // có thể thay đổi tên kiểu 
// const { name: username, email, age = 30 } = user;
// tên đối tượng ;
const { name: username, email, ...rest } = user;
console.log(rest);

const dad =[
{
    id:1,
    name: 'Hoàng An',
    email:'user1@gmail.com',
},
{
    id:2,
    name: 'Hoàng An',
    email:'user1@gmail.com',
},
{
    id:3,
    name: 'Hoàng An',
    email:'user1@gmail.com',
    }
]
const getUser = (userId) => dad.find(({
    id
}) => id === userId);
console.log(getUser(2));
const showMessage = ({ msg, type = 'success' }) => `<div class="msg msg-${type}">${msg}</div>`;
console.log(showMessage({ msg: "đăng kí thành công" }));
console.log(showMessage({ msg: "đăng kí thất bài", type: "error" }));
// dùng để gọi đối số theo tên của tham số 
const getPriceProduct = ({ price, currency = "vnd", seps = "," }) => {
    console.log(price,currency,seps);
}
getPriceProduct({
    price: 1500,
    seps: '.',
});
// cho Array
const userss = [
    'hoàng An',
    "hoangan@gmail.com",
    31,
    "Hà Nội",
    { course :"full-stack",price:2500000},
];
const [userplay, gmail] = userss;
console.log(username, email);
// thêm 1 dấu phẩy để có thể bỏ qua đối tượng 
const [useplayer, mail, ...asvg] = userss;
console.log(useplayer,mail);
console.log(asvg);
const [ten, mes, age, address, { course, price }] = userss;
console.log(course, price);
// bài toán hoán vị đơn giản 
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);
const player = {
    name: "hoàng an",
    email: "hoangan@gmail.com",
};
const key = "name";
const { [key]: name } = player
console.log(username);