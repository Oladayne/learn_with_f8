// kiểm tra 1 biến có phải mảng hay ko 
var users = new Array("AN","DUONG","VUONG")  
if (Array.isArray(users)) {
    console.log("đay là mảng");
} else {
    console.log("đây ko phải mảng");
}
// lấy số lượng phần tử của mảng 
console.log(users.length);


// thêm phần tử vào cuối mảng
//tenbienmang[index]=giá trị
users[users.length] = "đat";
console.log(users);


//sửa phần tử trong mảng 
users[2] = "Dũng";
console.log(users);


// truy cập vao 1 phần tử trong mảng 
console.log(users[0]);


//duyệt mảng 
for (var index = 0; index < users.length; index++){
    console.log(users[index]);
}
for (var index in users) {
    console.log(users[index]);
}
for (var value of users) {
    console.log(value);
}


// xóa phần tử trong mảng 
var indexDel = 1;
var newArr = [];
for (var index in users) {
    if (+indexDel === +index) {
        continue;
    }
    newArr[newArr.length] = users[index];   
}
console.log(newArr);


//bài tập : thêm 1 phần tử vào đầu mảng 
var value = "tuấn";
var newArrr = [value];
for (var index in users) {
   newArrr[newArrr.length] =users[index]
} 
console.log(users);
// bài tập : nối 2 mẩng và trả về mảng mới 
var arr1 = ["A", "B", "C", "D"];
var arr2 = [1, 2, 3];
var newArrrr = [];
for (var index in arr1) {
    newArrrr[newArrrr.length] = arr1[index];
}
for (var index in arr2 ) {
    newArrrr[newArrrr.length] = arr2[index];
}
console.log(newArrrr);
var arr1 = ["A", "B", "C", "D"];
var arr2 = [1, 2, 3];
var newArrrr = [];
for (var index = 0; index < arr1.length + arr2.length; index++) {
    if (index < arr1.length) {
        newArrrr[newArrrr.length] = arr1[index];
    } else {
        newArrrr[newArrrr.length] = arr2[index-arr1.length];
    }
}
console.log(newArrrr);



// phương thức xử lý mảng


// 1 at(index) lấy phàn tử theo mảng index 
console.log(newArrrr.at(1));


// concat(arr1,ar2,...) nối mảng hoặc chuỗi trả về 1 mảng mới 
console.log(newArrrr.concat(arr1, arr2));


// indexOf(value) tìm vị trí xuất hiện đầu tiên của phần tử trong mảng 
console.log(newArrrr.indexOf("B"));


// lastIndexOf(value)=> tìm vị trí xuất hiện cuối cùng của phần tử trong mảng 
console.log(newArrrr.lastIndexOf("B"));


// includes(value) tìm phần tử trong mảng trả về true/false
console.log(newArrrr.includes("B"));


// slice(start,end) cắt mảng và trả về 1 mảng mới 
console.log(newArrrr.slice(2, 4));


// join(step) nối các phần tử mảng thành 1 chuối và có ký hiệu nối 
console.log(newArrrr.join(" "));


//push() thêm phần tử vào cuối mảng , thay dổi mảng ban đầu , hàm này trả về số lượng phần tử sau khi thêm vào
var count = newArrrr.push("A", "B", "C");
console.log(count);
console.log(newArrrr);


// unshift() thêm phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm 
var cow = newArrrr.unshift("A", "B", "C");
console.log(cow); 
console.log(newArrrr);


//pop() xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa 
var value = newArrrr.pop();
console.log(newArrrr);
console.log(value);


// shift xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa 
var value = newArrrr.shift();
console.log(newArrrr);
console.log(value);


// splice(index, number) xóa number phần tử từ vị trí index 
var result = newArrrr.splice(1, 2, "A", "B", "C");
console.log(newArrrr);
console.log(result);


//sort() sắp xếp mảng theo thứ tự tăng dần (chỉ sắp xếp chuỗi)
newArrrr.sort();
console.log(newArrrr);
//VD
var number = [1, 100, 10, 3, 8];
number.sort(function (a, b) {
    console.log(a, b);
    //b là số trước
    //a là số sau 
    if (b > a) {
        return -1;
        //return về số âm để dổi chỗ 
    }
    return a - b;//sắp xếp từ bé đến lớn 
//  return b - a; sắp xếp từ lớn đến bé 
});
console.log(number);



// bài tập : lấy tên của của họ và tên 
var fullname = "Nguyễn Ngọc Hùng";
var newName = fullname.split(' ').slice(-1).join('');
console.log(newName);

//bài tập sắp xếp danh sách danh sách khách hàng tăng dần theo tên

var customers = ["Nguyễn Hoàng An ", "Hoàng Văn Thanh", "Nguyễn Chi Nam"]
var getFirstName = function (fullname) {
    return fullname.split(" ").slice(-1).join();
};
customers.sort(function (a,b) {
    if (getFirstName(b)>getFirstName(a)) {
        return -1;
    }
})
console.log(customers);

console.log("================");

//fill(value) thay đổi tất cả phần tử mảng thành 1 giá trị 
customers.fill("f8");
console.log(customers);


//forEach(callback) duyệt qua từng mảng trả về phần tử và index trong callback
// chỉ duyệt ko trả về giá trị và ko dừng dc 
newArrrr.forEach(function (value, index) {
    console.log(value,index);
})


//map(callback)
//vòng lặp này sẽ trả vê 1 mảng mới
// số lượng phần tử của mảng mới luôn bằng số lượng của mảng ban đàu
// giá trị phần tử của mảng mới phụ thuộc vào return của callback
var newRay = users.map(function (value, index) {
    console.log(value, index);
    return `<h3>${index}-${value}</h3>`;
});
console.log(newRay);
 

var html = `<ul>

${users
        .map(function (user) {
            return `<li>${user}</li>`;
        })
        .join("")}
</ul>`;
document.write(html)

// bài tập biến mảng 2 chiều thành mảng 1 chiều 
var query = [

    ["name", "F8"],
    ["keyword", "Fullstack"],
    ["category", 1],
];
var LA = query.map(function (value) {
    return value.join("=");
})
    .join("&")
console.log(LA)


//filter(callback) có 2 tham số : value và index
//- trả về 1 mảng mới
//- mảng mới phụ thuộc vào return true của callback
var numbers = [1, 2, 3, 4, 5, 6];
var results = numbers.filter(function (number) {
    if (number >=3) {
        return true;
    }
});
console.log(results); 
//bài tập nhỏ : lấy ra các số chẵn 
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.filter(function (number) {
    if (number % 2===0) {
        return true;
    }
});
console.log(result); 
// bài tập 2 
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.filter(function (number) {
    if (number % 2===0) {
        return true;
    }
}).filter(function (item) {
    var index = numbers.indexOf(item);
    if (index !== -1) {
        numbers.splice(index, 1);
    }
    return true;
});
console.log(result); 
console.log(numbers);
// lọc tên theo từ khóa 
var customers = ["Tạ Hoàng An",
    "Lưu Tuấn Anh",
    "Nguyễn Xuân Tuấn Anh",
    "Hoàng Văn Thanh",
    "Phạm Hoàng Anh",
    "Trần Đình Quý ",
    "Nguyễn Chi Nam",];
var keyword = "an";
var result = customers.filter(function (customers) {
    return customers.toLowerCase().includes(keyword.toLowerCase());
});
console.log(result);


//find(callback)
//- cách hoạt động giống filter nhưng sẽ trả về phần tử mảng đầu tiên 
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var re = num.find(function (params) {
    return params >= 3;
})
console.log(re);


//findLast(callback)
//- trả về phần tử mảng cuối cùng 
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var re = num.findLast(function (params) {
    return params >= 3;
})
console.log(re);


//findIndex()
// cách hoạt động giống find nhưng sẽ trả về index  
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var re = num.findIndex(function (params) {
    return params >= 3;
})
console.log(re);

//finLastIndex()
//- cách hoạt động giống findLast nhưng sẽ trả về Index
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var re = num.findLastIndex(function (params) {
    return params >= 3;
})
console.log(re);


//bài tập 
var user = [
    ["Hoàng An", "hoangan.web@gmail.com"],
    ["Tuấn Anh", "tuananh@gmail.com"],
    ["Nguyễn DƯơng", "duong@mail.com"],
    ["Chi Nam", "chinam@gmail.com"]
]
var email = "duong@mail.com"
var updatedUser = user.filter(item => item[1] !== email);

console.log(updatedUser);


//some(callback)
//- hàm này trả về true nếu có ít nhất 1 lần callback return true
//- trả về false nếu ko có lần nào callback return true 
var n = [1, 3, 5, 9, 11];
//kiểm tra mảng trên có số chẵn hay ko 
var check = n.some(function (nun) {
    if (nun % 2 === 0) {
        return true
    }
})
console.log(check);


//every
//- trả về true khi tất cả các lần lặp return true 
//- trả về false khi có ít nhất 1 lần return true
var n = [1, 3, 5, 9, 11];
//kiểm tra mảng trên có số lẻ hay ko 
var check = n.every(function (nun) {
    if (nun % 2 !== 0) {
        return true
    }
})
console.log(check);



