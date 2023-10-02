var zero = document.querySelector(".zero");
var tru = document.querySelector(".tru");
var cong = document.querySelector(".cong");
cong.addEventListener('click', function () {
    zero.innerText++
});
tru.addEventListener('click', function () {
    zero.innerText--
    if (zero.innerText < 0) {
        return zero
    }
});
console.log(zero);
