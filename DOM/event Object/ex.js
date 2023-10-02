// event Object
// object để mô tả thông tin của sự kiện
// mỗi nhóm sự kiện có thông tin mô tả khác nhau 
// var title = document.querySelector(".title");
var btn = document.querySelector(".title");
// var name = document.querySelector(".name");
// title.addEventListener("mousedown", function (e) {
//     console.log(e);
// })
var handlDrag = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    Object.assign(btn.style, {
        position: "fixed",
        top: `${y - offsetY }px`,
        left:`${x - offsetX }px`,
    })
} 
var offsetX = 0;
var offsetY = 0;

btn.addEventListener("mousedown", function (e) {
    console.log(e);
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", handlDrag);
});
document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handlDrag);
});
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
    //hành động mặc định của tình duyệt
    // => chặn các hành động mực định của trình duyệt 
    // => preventDefault()
    e.preventDefault()
    console.log(this.href);
})
// chặn nổi bọt vs phương thức stoppropagation 2 cái phải cùng sự kiện
