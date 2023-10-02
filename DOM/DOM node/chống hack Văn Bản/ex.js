var todo = document.querySelector('.todo');
var todoForm = document.querySelector('form');
var todoList = todo.querySelector('.todo-list');
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputEl = this.children[0];
    var name = inputEl.value;
 
    var p = document.createElement('p');
    p.innerText = name;
    var span = document.createElement('span');
    span.innerText = "Xóa";
    span.addEventListener("click", function () {
        handleRemove(p);
    })
    p.append(span);
    todoList.append(p);
    inputEl.value = "";
});
var handleRemove = function (todo) {
    todo.remove();
}
// comment Node 
var comment = document.createComment('TodoList');
todo.append(comment);


var content = document.querySelector('.content');
console.log(content.children);
console.log(content.childNodes);
console.log(content.firstElementChild);

/*
-childNodes
-parentNode
-nextSibling
-previousSibling
-firstChild
-lastChild
-> trả về Node : text , comment , element ,...
 */