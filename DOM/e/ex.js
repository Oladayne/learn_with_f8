// DOM Navigation
var title = document.querySelector(".title");
// chọn thành phần cha gần nhất : parentElement
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.parentElement.parentElement.parentElement);




// chọn thành phần con : children -> trả về 1 danh sách 
var menu = document.querySelector(".menu");
console.log(menu);
console.log(menu.children[1].children[1].children[0].innerText);
// for (var i = 0; i <= menu.children.length; i++){
//     for (var j = 0; j <= menu.children[i].children[j].length; j++){
//         if (j >= 0) {
            
//         }
//     }
// }
var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function (menuItems) {
    if (menuItems.children.length === 2) {
        menuItems.classList.add("has-children");
    }
});



// chọn thành phần anh em
/*
- ngang hàng 
* liền kề sau 
* liền kề trước
 */
var active = document.querySelector(".lists .active");
var next = active.nextElementSibling;
console.log(next);

var last = document.querySelector(".lists .last");
var prev = last.previousElementSibling;
console.log(prev);

var list = document.querySelector(".lists");
//lất elment đầu tiên 
var first = list.firstElementChild;
console.log(first);
// lấy element cuối cùng 
var last = list.lastElementChild;
console.log(last);