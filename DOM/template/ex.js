// template 
var root = document.querySelector('#root');
// var html = `
//     <h1>F8-Fullstacks</h1>
//     <button>Click Me</button>
// `;
// var template = document.querySelector('template');
// var templateNode = template.content.cloneNode(true);
// // sử dụng cloneNode để nhân bản đối tượng
// root.append(templateNode);
// var templateNode2 = template.content.cloneNode(true);
// root.append(templateNode2)
var f8 = {
    render: function (rootEl, option = {}) {
        // var root = document.querySelector(rootEl);
        // root.innerHTML = option.template
        var templateEl = document.createElement("template");
        templateEl.innerHTML = option.template;
        console.log(templateEl);
        var templateNode = templateEl.content.cloneNode(true);
        // console.log([templateNode]);
        // root.append(templateNode)
        Array.from(templateNode.children).forEach(function (element) {
            var length = element.getAttribute("v-length");
            if (length) {
                var count = length
                for (var i = 0; i < length; i++) {
                    count--;
                    var elementNode = element.cloneNode(true);
                    elementNode.innerHTML=elementNode.innerHTML.replaceAll('{index}',count,)
                    templateNode.insertBefore(elementNode, element.nextElementSibling);
                }
                element.remove()
            }
        });
        root.append(templateNode)
    },
};
f8.render("#root", {
    template: `
    <h1 v-length ="6">Sản Phẩm{index} </h1>`,
});