var content = document.querySelector('.content');// chủ thể 
console.log(content);
var Shadow = content.attachShadow({// thằng con 
    mode: "open",
});
console.log(Shadow);
Shadow.innerHTML = `<h1>Học Lập trình không khó</h1>`
var style = document.createElement('style');
style.textContent = `
    h1{
        color: red;
    }
`;
Shadow.prepend(style);