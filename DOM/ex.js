//DOM Element:
//truy xuất hàm thông qua ID
// Document .getElementById(id)
var titile = document.getElementById("title");
console.log(titile);
// chỉ lấy Element đầu tiên


// truy xuất thông qua class
//document .getElementByClassName(class)=> trả về 1 danh sách các Element có cùng class 
var titileList = document.getElementsByClassName("title");
console.log(titileList[0]); // có thể truyền Index vào để hiển thị vị trí


// truy cập thông qua tên thẻ HTML
//document.GetElementByTagName(tag)
//=> trả về 1 danh sách 
var titleList = document.getElementsByTagName("h2")
console.log(titleList);


// truy cập thông qua selector css (trả về phần tử đầu tiên )
//document.querySelector(selector)
var title = document.querySelector(".title");
console.log(title);


//truy cập thông qua selector css trả về tất cả phần tử 
var total = document.querySelectorAll("title");
console.log(total);


var first = document.querySelector(".content .first");
console.log(first);
var last = document.querySelector(".content .last");
console.log(last);


// các trường hợp đặc biệt
// truy xuất vào thẻ head : document.head
// truy xuaasts vào thẻ body : document.body
// truy cập vào form và các field thông qua thuộc tính name

var input = document.login_form.fullname;
console.log(input);
var btn = document.login_form.btn;
console.log(btn);