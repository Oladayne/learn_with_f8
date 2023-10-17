/*
-API : là dữ liệu dc lấy trên sever 
* khi xây dựng frontend : tạo giao diện hiệu ứng , thao tác các thành phần trên trang web 
-> frontend sẽ phải tháo tác để lấy dữ liệu , thêm dữ liệu , sửa dữ liệu , xóa dữ liệu 
- sever sẽ phải cung cấp API 
RestFull API -> tiêu chuẩn để thiết kế web API 
- URL Request (backend sẽ cung cấp): server API + resoure
=> ví dụ : http://api.fullstack.edu.vn/users
- HTTP method 
+ get lấy dữ liệu về 
+ post thêm dữ liệu mới 
+ put sửa dữ liệu kiểu ghi đè 
+ patch sửa dữ liệu (không ghi đè)
+ delete xóa 
- Endpoint: sự kết hợp giữa HTTP method và Resource 
get/users => Endpoint 
-Status Code 
-Response Message : JSON
- làm sao để thao tác API trong JS 
+ XMLHttpRequest 
+ fetch-> trả về promise
+ thư viện 
 */
const serverApi = `http://localhost:3000`;
fetch(`${serverApi}/users`).then((response) => {
    console.log(response);
    // lấy thông tin của Response trả về
    // muốn lấy dữ liệu : gọi đến hàm json() hoặc text()
    return response.json();// hàm này trả về 1 promise
}).then((users) => {
    document.body.innerHTML = users.map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3>`)
        .join("");
})
const getUser = async (id) => {
    const repo = await fetch(`${serverApi}/users/${id}`);
    const user = await repo.json();
    console.log(user);
};
getUser(2)

// phương thức post 
const postUser = async (data) => {
    const rep = await fetch(`${serverApi}/users`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(rep);;
};
postUser({
    name: "user 6",
    email: "user6@gmail.com",
});