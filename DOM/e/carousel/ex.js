// tạo các element 
var carousell = document.querySelector('.carousell');
var carouselInner = carousell.querySelector('.carousel-inner');
var carouselItems = carouselInner.children;
var carouselNextBtn = carousell.querySelector('.carousel-nav .next');
var carouselPrevBtn = carousell.querySelector('.carousel-nav .prev');
 // tính kích thước 1 item 
var itemWidth = carouselInner.clientWidth; // lất kích thước chiều rộng của 1 element
// tính tổng kích thươc các item 
var totalWidth = carouselItems.length * itemWidth;
// câp nhât css 
carouselInner.style.width = `${totalWidth}px`;
// lắng nghe sự kiện của nút next 
var position = 0; 
carouselNextBtn.addEventListener('click', function () {
    console.log("next");
    //khi bấm vào nút next thi phải trừ đi kích thước củ 1 item 
    if (Math.abs(position) + itemWidth * 2 > totalWidth) {
        return
    }
    position -= itemWidth;
    console.log(position);
    carouselInner.style.translate = `${position}px`;
}) 
carouselPrevBtn.addEventListener('click', function () {
    if (Math.abs(position) < itemWidth) {
        return
    }
    position += itemWidth;
    console.log(position);
    carouselInner.style.translate = `${position}px`;
})
