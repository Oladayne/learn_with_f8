/**
 * DOM HTML 
 */
var content = document.querySelector(".content");
// lay noi dung ben trong the HTMl (bao gom cac the HTML va khoang trang )
console.log(content.innerHTML);
// lay noi dung ben trong the HTML ( chi lay text va loai bo khoang trang)
console.log(content.innerText);
// lay noi dung ben trong the HTML ( chi lay Text vaf khong loai bo khoang trang )
console.log(content.textContent);
// lay noi dung ben trong bao gom cac EL dang tac dong 
console.log(content.outerHTML);

// CAP NHAT DU LIEU MOI CHO THE HTML

content.innerHTML = '<h2>Hoang An</h2>';
content.innerText = '<h2>Hoang An</h2>';
content.outerHTML = '<h2>Hoang An</h2>';
content.outterText = '<h2>Hoang An</h2>';