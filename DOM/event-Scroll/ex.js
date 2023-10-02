// lắng nghe sự kiện kéo thanh cuộn trình duyệt 
window.addEventListener('scroll', function () {
    //lấy tọa độ khi kéo thanh cuộn 
    var x = window.scrollX;
    var y = window.scrollY;
    console.log(`x=${x}`,`y=${y}`);
})
var gotoBtn = document.querySelector('.goto');
gotoBtn.addEventListener('click', function () {
    // window.scroll(0, document.body.clientHeight,{});
    window.scroll({
        top: document.body.clientHeight,
        behavior: "smooth",
    });
});
var topBtn = document.querySelector('.top');
window.addEventListener('scroll', function () {
  var y = window.scrollY;
  if (y >= 50) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', function () {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
var header = document.querySelector('.header');
var headerInner = header.children[0];
var headerNav = header.children[1];
var headerInnerHeight = headerInner.clientHeight;
var headerNavHeight = headerNav.clientHeight;

window.addEventListener('scoll', function () {
    var y = window.scrollY;
    if (y >= headerInnerHeight) {
        headerNav.classList.add('fixed');
        document.body.style.paddingTop=`${headerNavHeight}px`
    } else {
        headerNav.classList.remove('fixed')    
        document.body.style.paddingTop = '';
    }
})