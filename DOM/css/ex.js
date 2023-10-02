var content = document.querySelector(".content");
console.log(content.style);
content.style.color = "red"
content.style.fontweight = "bold"
content.style.textTransform = "uppercase"

// giá trị sẽ là 1 chuỗi rỗng nếu không set


var css = {
    color: "red",
    fontweight: "bold",
    fontStyle: "italic",
    textTransform: "uppercase",
    backgroundImage: `url(https://picsum.photos/id/237/200/300)`,
    transform: `translateX(20px)`,

};
Object.assign(content.style, css)

// bổ sung thêm 2 thuộc tính

// lấy giá trị thuộc tính css 
console.log(content.style.color);