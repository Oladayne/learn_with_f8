// khai báo 1 chuỗi 
var fullname = "Hùng" 
// khai báo dựa vào hàm tạo 
var fullname2 = String("Hùng")
// khai báo dựa vào hàm tạo khai báo như 1 đối tượng (object)
var fullname3 = new String("Hùng")

//phương thức xử lý chuỗi
// độ dài (length)
console.log(fullname.length);


// trả về kí tự theo index (charAt) index bắt đầu từ 0 hoặc at
console.log(fullname.charAt(0));


//trả về mã ASCII của kí tự theo index (charCodeAt)
console.log(fullname.charCodeAt(0));


// nối nhiều chuỗi (concat(value1,value2))
console.log(fullname.concat("a","b","c"));


// tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha nếu ko tìm thấy sẽ trả về -1 (indexOf(value))
console.log(fullname.indexOf("f8"));


//tìm vị trí cuối cùng (lastIndexOf)
console.log(fullname.lastIndexOf("f8"));


// tìm chuỗi con trong chuỗi cha và trả về true hoặc false (includes) có thì true ko có thì false 
console.log(fullname.includes("f8"));


// cắt cắt chuỗi từ index đến end (slice(start, end))
//nếu ko có tham số thứ 2 sẽ cắt đến hết chuỗi 
//nếu chỉ 1 tham số và là số âm sẽ lấy từ cuối lên đầu 
console.log(fullname.slice(0, 2));
//bài tập .
var email = "hoangan@fullstack.edu.vn";
var position = email.indexOf("@");
var username = email.slice(0, position);
console.log(username);


// tìm kiếm và thay thế chuỗi đầu tiên tim dc (replace(search, with))
// hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy
console.log(fullname.replace("H", "g")); 
// VD về regex
var constent = "Nguyễn Ngọc Hùng 0333452030";
var pattern = /((0|\+84)\d{9})/g;
console.log(constent.replace(pattern, "***"));


// thay thế tất cả (replaceAll())
console.log(fullname.replace("Hù", "Hòa"));


//tách chuỗi thành mảng (split(value)) dựa vào kí tự phân tách 
console.log(fullname.split(""));


// chuyển chữ thường (toLowerCase())
console.log(fullname.toLowerCase());


// chuyển chữ hoa (toUpperCase())
console.log(fullname.toUpperCase());


// loại bỏ khoảng trắng đầu và cuối chuỗi (trim())j
var str =  "  Hùng  ";
console.log(str);
console.log(str.trim())


//loại bỏ khoảng trắng đầu trimStart() và cuối trimEnd()
console.log(str.trimStart());
console.log(str.trimEnd());


//cắt chuỗi dựa vao biểu thức chính quy match() 
var content = `lorem Nguyễn Ngọc Hùng Yên Sở Hoàng Mai Hà Nội số điện thoại 0333452030 email : Olawithbae@gmail.com`
var pattern = /@[a-z-_\.0-9]+\.[a-z]{2,}/g;
var resurlt

//
var namee = "nguyen ngoc hung an";
namee = namee.charAt(0).toUpperCase()+namee.slice(1);
for (let i = 0; i < namee.length; i++){
    var temp = namee.charAt(i);
    if ( temp === " ") {
        namee = namee.slice(0,i+1) +namee.charAt(i+1).toUpperCase()+namee.slice(i+2);
   }
}
console.log(namee);