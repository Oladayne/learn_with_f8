var slider = document.querySelector(".slider");
// tạo sự kiện 
var finishEvent = new Event("finish");
slider.addEventListener("input", function () {
    var value = this.value;
    console.log(value)
    if (+value === 100) {
       // gửi đi sự kiện vào E slider 
        slider.dispatchEvent(finishEvent);
    }
});
slider.addEventListener("mousedown",function(e){
    finishEvent.initialOffsetX = e.offsetX;
    finishEvent.initialOffsetY = e.offsetY;
})
// khi naoc ó nhu cầu thì chung ta sẽ lắng nghe sự kiện finish 
slider.addEventListener('finish', function (e) {
    console.log("Hoàn Thành");
    console.log(e);
})
