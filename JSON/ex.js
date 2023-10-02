// Json  giao tiếp giữ liệu giữa các nền tảng với nhau
// dùng để mô tả dữ liệu 1 cách toàn vẹn
// hỗ trợ hầu hết các ngôn ngữ lập trình
// là chuỗi
// có thể mô tả tất cả các kiểu dữ liệu thường là mảng và đối tượng
//KHI LÀM VIỆC VS JSON
// chuyển từ các kiểu dữ liệu thành JSON JSON.stringify(variable)
// chuyển JSON thành các kiểu dữ liệu tương ứng JSON.parse(variable)


// ví dụ 
var user = [
    {
        id: 1,
        name:"Hoàng An",
    },
    {
        id: 2,
        name:"Nguyễn Dương",
    },
]
var json = JSON.stringify(user);
console.log(json,typeof json);