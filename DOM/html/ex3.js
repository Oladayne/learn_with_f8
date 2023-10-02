// DOM HTML : lam viec voi thuoc tinh
/**
 * thuoc tinh co san cua the HTML :
 * tenElement.tenThuocTinh => lay gia tri thuoc tinh 
 * tenElement.tenThuocTinh = gia tri => thiet lap gia tri moi cho thuoc tinh 
 * 
 * 
 * thuoc tinh ko co san cua the HTML 
 * data attribute:
 * VD 
 * data-index , data-count
 */
window.onload = function () {
    var img = document.querySelector('img');
    console.log(img.width);
    console.log(img.height);
    console.log(img.src);
console.log(img.title);
    console.log(img.alt);
    // thay doi gia tri thuoc tinh 
    img.src = 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
    
// truy cap data attibute 
console.log(img.getAttribute('data-count'));
console.log(img.dataset.count);
console.log(img.dataset.numberIndex);
// cap nhat gia tri cho data attribute 
img.setAttribute('data-count', 10);
img.dataset.numberIndex = 'ahihi'
// xoa thuoc tinh 
    img.removeAttribute('src')
}
//xoa the html 
// img.remove();
