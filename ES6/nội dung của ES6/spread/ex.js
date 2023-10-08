// trải các phần tử Array , object ra ngoài
const oldObj = {
    name: "hoàng an",
    email: "hoangan@gmail.com"
};
const newObj = {
    course: "fullstack",
    ...oldObj,
};
console.log(newObj);

const oldArray = [
    "hoàngan",
    "hoangan@gmail.com"
];
const newArray = ["fullstack", ...oldArray];
console.log(newArray);
// ví dụ dành riêng cho mảng 
const sum = (a, b, c) => a + b + c;
const values = [10, 20, 30];
console.log(sum(...values));

const inittial = {
    name: "hoàng an",
    email: "hoangan@gmai.com"
};
// tạo 1 object mới có các phần tử giống object cũ và sửa lại email 
const newwObj = { ...inittial, email: "contact@gmail.com" };
console.log(inittial);
console.log(newwObj);
const inittialArr = [
    "user1", "user2", "user3"
];
// tạo 1 array mới có các phần tử của array ban đầu và thêm 1 phần tử mới 
const newArr = [...inittialArr];
newArr.push("user4")
    ;
    console.log(newArr);