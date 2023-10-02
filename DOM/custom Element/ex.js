// var content = document.querySelector('.content');
// console.log(content);
// HTMLElement.prototype.css = function (style = {}) {
//     Object.assign(this.style, style);
// };
// content.css({
//     color: "red",
//     fontWeight: "bold",
// });
// WebComponent => tạo ra các thành phần cho trang web : header ,footer , sliderbar , carousel => dưới dạng thẻ HTML riêng
/*
- custom Element 
- tìm hiểu cách kế thừa từ HTMLElement :
+ tìm hiểu về cách kế thừa 
+ vòng đời component (lifecycle Callback)
- Shadow DOM : đóng gói và tách biệt ra khỏi DOM thật 
- template và slot   
 */
console.log(customElements);
var HelloWorld = function () {
  // kế thừa từ HTMLElement  
    return Reflect.construct(HTMLElement, [], HelloWorld);
    // thay thế super() trong class
};
HelloWorld.prototype = Object.create(HTMLElement.prototype)
HelloWorld.prototype.connectedCallback = function () {
    var name = this.getAttribute('name');
    var email = this.getAttribute('email');
    var borderColor = this.getAttribute('border-color');
    var borderRadius = this.getAttribute('border-radius');
    var borderWidth = this.getAttribute('border-width');
    var html = `<div class="box"> 
    <h1> Hoc lập trình không khó </h1>
    <h2> ${name}</h2>
    <h2>${email}</h2>
    </div>`;
    this.innerHTML = html;
    var style = document.createElement('style');
    style.textContent = `
    .box {
    border: ${borderWidth ?? 0} solid ${borderColor ?? "#000"};
    border-radius:${borderRadius ?? 0};
    padding:15px;
    }`;
    this.prepend(style);
}
console.log([HelloWorld]);
customElements.define('hello-world',HelloWorld)