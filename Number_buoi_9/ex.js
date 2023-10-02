// number kiểu dữ liệu nguyên thủy
// hàm tạo number là Nụmber
console.log([Number]);
var a = 10;
console.log(a, typeof a);

// số NaN (not a number)

//NaN trả về trong các trường hợp sau 
/**
 * ép về kiểu số thất bại 
 * các phép toán có toán hạng không phải là số (trừ chuỗi số)
 * khi thực hiện các phép toán số học : các toán hạng sẽ dc JS tự động ép kiểu về số 
 * nếu có toán hạng nào ép kiểu thất bại 
 * =>>> kết quả cuối cùng sẽ trả về kiểu NaN
 * chỉ cần 1 toán hạng là chuỗi thì nó sẽ trả về chuỗi 
 */

var a = 10;
var b = "F8";
var c = a / b;
console.log(c);


// infinity số này sẽ xuất hiện khi bị tràn bộ nhớ lưu trữ

// kiểm tra 1 số có infinity ko 
var a = 1000 ** 1000;
if (a !== Infinity) {
    console.log(a);
} else {
    console.log("ko xử lý dc");
}

// bài toán ép kiểu 
var a = "123a123";
var b = "12.53a123";
var c    = "12.53a123";
//ép kiểu số nguyên : cắt đến kí tự 
a = Number.parseInt(a);
console.log(a);
//ép kiểu số thực 
b = Number.parseFloat(b);
console.log(b);
//ép kiểu số (thực ,nguyên)
// a= Number(a); viết tắt là dấu + 
c = +c;
console.log(c);


// bài tập cho trước 1 mảng
//tính tổng các số chẵn 
var numbers = [1, 5, 9, 2, 8];
var total = 0;
numbers.forEach(function (item) {
    item = Number(item);
    console.log(item);
    if (item !== true) {
        item = Number(item);
        if (!Number.isNaN(item) && item % 2 !== 0 && Math.abs(item)!==Infinity) {
            total += item
        }
    }
});
console.log(total);
// if (numbers=== Number.parseInt(numbers)) {
//     var num = numbers.reduce(function (pre, current) {
//         if (pre % 2 && current % 2) {
//             return pre + current;
//         } else {
//             console.log("vào đây ");
//         }
//     })
// } {}


//kiểm tra 1 số nguyển 
var a = 123;
console.log(Number.isInteger(a));
//kiểm tra 1 số có phải số thực không 
var b = 123.5;
if (typeof b === 'number' && !Number.isNaN(b) && Math.abs(b) !== Infinity && !Number.isInteger(b)) {
    console.log("ko phải số nguyên ");
}
//lấy chữ số phần thập phân 
var a = 12.5678;
a = a.toFixed(1);
console.log(a);
// sau khi toFixed trả về 1 chuỗi

// định dạng tiền tệ 
var price = 12000000;
price = price.toLocaleString("vi", {
    style: "currency",
    currency: "EUR",
});
console.log(price);


console.log("các đối tượng toán học ");
// abs() lấy trị tuyệt đối 
console.log(Math);
console.log(Math.abs("10"));

//ceil() luôn làm tròn lên
console.log(Math.ceil(10.1));

//floor luôn làm tròn xuống 
console.log(Math.floor(10, 9));

//round() làm tròn theo nguyên tắc làm tròn 
console.log(Math.round(10.4));


//min() tìm ra giá trị nhỏ nhất hoặc lớn nhất 
console.log(Math = (5, 9, 1, -1));


//random() trả về số ngẫu nhiên lớn hơn ko va nhỏ hơn 1 