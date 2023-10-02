//trigger Event : tự kích hoạt 1 event 
// dùng các phương thức có sẵn : click() , submit()
// dung dispatch event => áp dụng cho tất cả các sự kiện 
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    console.log('hello F8');
});
setInterval(function () {
    btn.click();
}, 1000);
var search = document.querySelector(".search");
search.focus();
var quantity = document.querySelector('.quantity input');
var minusBtn = quantity.previousElementSibling;
var plusBtn = quantity.nextElementSibling;
var changeEvent = new Event('change');
quantity.addEventListener('change', function () {
    var value = this.value;
    console.log(value);
});
minusBtn.addEventListener('click', function () {
    quantity.value--;
    quantity.dispatchEvent(changeEvent);
});
plusBtn.addEventListener('click', function () {
    quantity.value++;
    quantity.dispatchEvent(changeEvent);    
})