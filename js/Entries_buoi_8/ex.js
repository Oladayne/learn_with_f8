// object.entries 
var user = {
    name: "Hoàng An",
    email: "hoangan@gmail.com",
    age: "31",
};
console.log(Object.entries(user));
// trả về mảng 2 chiều
// bài tập chuyển object về mảng query string 
var query = {
    keyword: "Hoàng An",
    category: 1,
    brand: 1,
    province: "Hà Nội",
    
};
//chuyển thành chuỗi sau
// key=Hoàng+An&category=1&brand=1&province=Hà+Nội 
var newquery = Object.entries(query).map(function (pre) {
    return pre.join("=");
})
    .join("&")
    .replaceAll(" ", "+");
    console.log(newquery);

var oldquery = newquery.split("&").map(function (element) {
    var elementArr = element.split("=");
    elementArr[1] = elementArr[1].replaceAll("+", " ");
    return elementArr;
});
oldquery = Object.fromEntries(oldquery);
console.log(oldquery);

// viết lại vòng lặp map
Array.prototype.map2 = function (callback) {
    if (typeof callback !== "function") {
        return;
    }
    var newArr = [];
    for (var i = 1; i < this.length; i++) {
        var value = this[i];
        console.log(this);
        console.log(value);
        var result = callback(value, i);
        console.log(result);
        newArr[newArr.length] = result;
    }
    return newArr
}
var user = ["An", "Tuấn", "Đạt", "Tùng"];
var output = user.map2(function (user, index) {
    return `<h3>${index}-${user}</h3>`
});
console.log(output);
//object.create(null): không kế thừa bất cứ object nào : tạo ra 1 object ko có peototype
var user = {};
console.log(user);
var user = Object.create(null);
console.log(user);
// tham chiếu trong object 
var a = {
    name: "Hoàng An",
    email: "hoangan@gmail.com",
};
var b = Object.assign({}, a);//shallow copy 
var b = JSON.parse(JSON.stringify(a));//deep copy
b.name = "Hoàng An F8";
console.log(a, b);

// optional chaining(?.)
// 1 với thuộc tính 
var a = null;
console.log(a?.name);
//2 với phương thức 
var a = {};
a.getName?.();
// case thực tế 
var user = [1, 2, 3];
// var user = undefined ;
if (user.length) {
    user.forEach?.(function (user) {
        console.log(user);
    });
}
//chỉ chạy khi user là 1 mảng 