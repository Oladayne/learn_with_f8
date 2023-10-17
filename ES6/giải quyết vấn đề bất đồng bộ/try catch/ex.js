//try catch => xử lý các lỗi ngoại lệ
// try thực thi
// nếu xảy ra lỗi => thực thi catch
// nếu ko xảy ra lỗi => bỏ qua catch
// thực thi finally
try {
    // code 
    getA();
    let a = 10;
    if (a > 20) {
        console.log(a);
    } else {
        throw new Error("a ko dc nhỏ hơn 2")
    }
} catch (exception) {
    if (exception.message.includes("not defined")) {
        console.error("đã xảy ra lỗi liên quan đến định nghĩa hàm ")
    }
} finally {
    console.log("Hoàn Thành");
}
console.log("hello-f8");


const getUser = () => Promise.reject('lỗi mạng');
const showUser = async () => {
    try {
        const data = await getUser();
        console.log(data);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("đã xong");
   }
}
showUser();