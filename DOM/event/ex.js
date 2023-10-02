// DOM Event
// event handler
/** tenElement.tensukien = function(){
 *   Body } 
 * se loai bo cai hanh dong truoc day*/

// event Listener
/**.sty
 * no se chay gop dc (chay dc nhieu hanh dong trong 1 su kien )
 * addEventListener
 * removeEventListener
 */


var btn = document.querySelector('.btn');
console.log([btn]);
var inputEl = document.querySelector(".name");
btn.addEventListener("click", function () {//click o day la phuong thuc hoat dong 
    console.log("Hello F8");
})
btn.addEventListener("dblclick", function () {
    console.log("hello f88");
})
var handlerClick = function () {
    console.log("hello F8");
};
btn.addEventListener("click", handlerClick);
inputEl.addEventListener('change', function () {
    btn.removeEventListener('click', handlerClick);
})
var items = document.querySelectorAll("ul li");
items.forEach(function (item) {
    item.addEventListener("click", function () {
        console.log(this);
    })
})
// var btn = document.querySelector(".btn");
// console.log([btn]);
// btn.onclick = function () {
//     console.log("hello  F8 ");
// }

// var btn = document.querySelector(".btn");
// console.log([btn]);
// var handlerClick= function () {
//     console.log("hello  F8 ");
//     btn.onclick = handlerClick;
// }

// btn.onmousedown = function () {
//     console.log("Bam chuot xuong");
// }
// btn.onmouseup = function () {
//     console.log("Nha chuot");
// }

// btn.onmousemove = function () {
//     console.log("Di chuyen chuot");   
// }


// var inputEl = document.querySelector('.name');
// inputEl.onkeyup = function () {
//     console.log("Nha phim");
// }
// inputEl.onkeydown = function () {
//     console.log("Bam Phim");
// }
// inputEl.onkeypress = function () {
//     console.log("bam phim ky tu");
// }
// inputEl.onchange = function () {
//     console.log("Da Thay Doi");
// }
// inputEl.onfocus = function () {
//     console.log("Focus");
// }
// inputEl.onblur = function () {
//     console.log("Blur");
// }