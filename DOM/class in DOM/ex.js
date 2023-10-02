var title = document.querySelector('.title');
console.log(title);
console.log(title.className);
console.log(title.classList);
// cac phuong thuc xu ly class
// add() => them class vao element 
title.classList.add('title5', 'title6');
// remove() => xoa class trong element
title.classList.remove('title', 'title3')
// contains() => kiem tra class ton tai 
console.log(title.classList.contains('title5'));
// toggle()
/*
- them class neu ko ton tai 
- xoa class neu ton tai 
 */
title.classList.toggle('title6');
title.classList.toggle('title6');
// Bai Tap

var content = document.querySelector('.content');
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    if (!content.classList.contains('hide')) {
        content.classList.add('hide');
        this.innerText = 'Hien'
    } else {
        content.classList.remove('hide');
        this.innerText = 'An'
    }
});
