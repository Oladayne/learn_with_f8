var content = document.querySelector('.content');
// var handleClick = function () {
//     var btn = document.querySelector(".btn");
//     btn.addEventListener("click", function () {
//         console.log("click me");
//         content.innerHTML += `<h1>Fullstack-F8</h1>`;
//         handleClick();
//     });
// };
// handleClick();
content.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        content.innerHTML += `<h1>Fullstack-F8</h1>`;
    }
});

var root = document.querySelector("#root")
// tạo element 
var h1 = document.createElement('h1');
h1.innerText = "full-stack-F8";
h1.id = "title";
h1.className = "title";
console.log(h1);

// render element lên UI
// 1. append hoặc appendchild -> đẩy xuống dưới cùng 
// * appendchild chỉ trả về object
// 2. prepend -> đẩy lên trên cùng  
root.append(h1);
//chỉ dùng dc ở 1 vị trí khi đã gọi rồi thì không thể gọi lại 
var h2 = document.createElement('h2');
h2.innerText = "hello-f8";
root.prepend(h2);
// ko ảnh hưởng đến vị trí của thẻ khác 
var btn = document.createElement('button');
btn.innerText = "add";
root.append(btn);
var count = 0;
btn.addEventListener("click", function () {
    var p = document.createElement('p');
    p.innerText = `Công Việc : ${++count}`;
    root.append(p);
    if(count === 5){
        h1.style.color = 'red';
        h1.innerText = "Hoàng An F8";
    }
});
/**
 * tạo ra cặp thẻ UL/LI như sau 
 */
var ul = document.createElement('ul');

var number=5;
for (i = 0; i <= number; i++){
    var li = document.createElement('li');
    li.innerText = `Item${i}`;
    ul.append(li);
}
root.prepend(ul);



//insertBefore(a,b)
// a là thẻ chèn 
// b là thẻ quyết định vị trí của thẻ a ( trước hoặc sau )
var h3 = document.createElement('h3');
h3.innerText = "hôm nay ăn gì ";
root.insertBefore(h3, h1);
// bài tập tạo 1 thẻ p có nội dung bất kì
//-> chèn sau node h3 ở trên 
var p = document.createElement('p');
p.innerText = "hôm nay chén gì ";
root.insertBefore(p, h3.nextElementSibling);
//replaceChild()-> thay thế node cũ bằng node mới 
var h4 = document.createElement('h4');
h4.innerText = 'Học Lập Trình Để Đi Làm';
h4.style.color = 'red';
root.replaceChild(h4, h2);
//-> h2 dc giải phóng thì có thể 
root.append(h2);



// removeChild()-> xóa node con 
root.removeChild(h2);