// có 2 loại đối tượng
// object literial : đối tượng nguyên bản (gốc của mọi đối tượng trong JS)
// function constructor : Hàm tạo


//khai báo đối tượng 
var user = {
    //key:value
    name: "Hoàng An",
    email: "Hoangan@gmail.com",
    address: "Hà Nội",
    // có thể là 1 phương thức
    getName: function () {
        return "Hoàng An F8";
    }
};// cách 1 
// var customer = new Object(); cách 2
console.log(user);


// truy cập vào key trong object
// cách 1 : tenobject.tenkey
// cách 2 : tenobject['tenkey']
console.log(user.name);
console.log(user.email);
console.log(user["address"]); 
console.log(user.getName());



// thêm key mới vào trong object
// có 2 cách 
user.age = 31;
//hoặc
user["job"] = "teacher";
// câp nhật giá trị của key đã tồn tại 
user.age = 32;
//hoặc
user["address"] = "Nam Từ Liêm - HN";



// xóa 
delete user.age;
console.log(user);



// duyệt các key trong object 
for (var key in user) {
    console.log(key,user[key]);
}
//user[key] để lấy ra value của nó sau khi duyệt
// nhược điểm :

// hoặc

Object.keys(user).forEach(function (key) {
    console.log(key, user[key]);
});


//this ở trỏng function và nó sẽ là object bên ngoài function đó
console.log("=====");


var user = {
    name: "hoàng an",
    email: "hoangan@gmail.com",
    detail: {
        age: 31,
        job: "teacher",
        histories: [
            {
                year: 2020,
                name: "công việc 1"
            },
            {
                year: 2021,
                name: "công việc 1"
            }
            ,
            {
                year: 2022,
                name: "công việc 1"
            },
        ],
    },
    getInfo: function () {
        var current = this;
        return {
            username: this.name,
            address: "Hà Nội",
            getFull: function () {
                console.log(this);
                return `
                name:${current.name}
                email:${current.email}
                địa chỉ:${this.address}
                `;
            }
        };
    },
};
console.log(user);
console.log(user.getInfo().getFull());


//prototype: kế thừa phương thức và thuộc tính 
Object.prototype.combine= function (...args) {
    var current = this;
   return args.map(function (key) {
        return current[key];
    });
}
Object.prototype.message = "f8-fullstack";
//bài tập 
var customer = {
    name: "Hoàng An",
    email: "Hoangan@gmail.com",
    age: 31,
  
};
console.log(customer.combine("name", "email", "age"));

var f8 = {
    class: "Đào tạo Lập trình",
    name:"Hoàng An",
};
console.log(f8.combine("class","name"));

console.log("=============");
//bài tập 
var user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
};
var course = {
    courseName: "Fullstack K4",
    teacher: "Hoàng An F8"
};
//nối object course vào object user
for (key in course) {
    user[key] = course[key];
}
console.log(user);



// object.assign (target, source)
var result = Object.assign(user, course);
console.log(result);
var use = Object.assign({}, user)
var result = Object.assign(use, course);
console.log(result);



// hàm tạo 
var user = {
    name: "Hoàng An",
    email: "HoangAn@gmail.com",
    getName: function () {
        return this.name;
    },
};
var Liz = {
    name: "Lưu Anh Quân",
    email: "quan@gmail.com",
    getName: function () {
        return this.name;
    },
};
console.log(user, Liz);
// tạo ra 1 b ản thiết kế cho object
// => function constructor
// đặt tên theo cú pháp pascalcase
var Person = function () {//có thể đưa tham số vào ()
    this.name = "Hoàng An";// truyền tham số thay cho "Hoàng An và email"
    this.email = "hoangan@gmail.com";
    this.getName = function () {
        return this.name;
    };
};

// thêm prototype cho hàm tạo 
Person.prototype.message = "Hoàng An";

//khởi tạo object
var person = new Person();//truyền đối số vào đây  sẽ cho ra các kết quả khác nhau 
console.log(person);

var user = new Person();
console.log(user);

var user = new Person("Quân", "quan@gmail.com");
console.log(user);
console.log(user.message);


// bài tập 
var User = function () {
    this.name = "Hoàng An";
    this.email = "Hoangan@mail.com";
};
var Auth = function () {
    var user = new User();
    this.getInfo = function () {
        return `
        Name:${user.name}
        Email:${use.email}
        `;
    };
};
var auth = new Auth();
console.log(auth.getInfo());
//kiểm tra biến thuộc hàm tạo nào 
var a = new Auth();
var b = new User();
var c = "Hoàng An";
var d;
console.log(a.constructor.name);
console.log(b.constructor.name);
console.log(c.constructor.name);
// console.log(d.constructor.name);
//kiểm tra  1 biến có phải object ko 
var a = null;
if (typeof a === 'object' && !Array.isArray(a) && a !== null) {
    console.log("object");
} else {
    console.log("Not object");
}
//tạo ra 1 hàm nội bộ ở bên trong 1 hàm tạo
//ví dụ 
var getMessage = function () {
    return `hello f8`
};
console.log(window.getMessage());
User.getMessage2 = function () {
    return ` hello f8-2`;
};
console.log(User.getMessage2());
