var h1 = document.createElement('h1');
var root = document.querySelector('#root')
var count = 0;
h1.innerText = `Count:`;
var textNode = document.createTextNode(0);
h1.append(textNode)
root.prepend(h1)
var btnTru = document.createElement('button');
btnTru.innerText = '-'
root.append(btnTru);
var btnCong = document.createElement('button');
btnCong.innerText = '+'
root.append(btnCong);
var mousedown = false;
var handleIncrement = function () {
    textNode.data++;
    if (mousedown) {
        setTimeout(function () {
            handleIncrement();
        }, 10);
    }
};

var handleTru = function () {
    textNode.data--;
    if (mousedown) {
        setTimeout(function () {
            handleTru();
        }, 10);
    }
};
btnCong.addEventListener("mousedown", function () {
    mousedown = true;
    handleIncrement();
});
btnCong.addEventListener("mouseup", function(){
    mousedown = false;
    handleIncrement();
})
btnTru.addEventListener("mousedown", function () {
    mousedown = true;
    handleTru();
});
btnTru.addEventListener("mouseup", function(){
    mousedown = false;
    handleTru();
})
//data là 1 phần của TextNode 