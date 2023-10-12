// export có 2 loại
// export default -> chỉ có 1 chỉ dùng với hàm hoặc classes
// export Named -> có thể có nhiều 
 export default function getMessage() {
    return "hello-f8";
}
class User{
    constructor() {
        this.name = "Hoàng An";
        this.email="hoangan@gmail.com"
    }
}
export const products = ["product1", "product2"];
const customer = { name: "hoàng an" };
export { User, customer };// bắt buộc đưa vào object 