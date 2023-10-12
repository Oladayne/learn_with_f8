class User{
    constructor() {
        this.name = "Hoàng An";
        this.email = "hoangan@gmail.com";
    }
    getName() {
        return this.name;
    }
    static getFullName() {
        // gọi đến hàm getName()
        return new this().getName();
    }
    static getFullEmail() {
        return new this().email;
    }
    getEmail() {
        return this.constructor.getFullEmail();
    }
}
const user = new User()
console.log(user.getEmail());


// set và get 
class F8 {
    //private: nếu muốn khai báo trong constructor thì phải khai báo ở ngoài sau đó mới gán giá trị cho nó từ vên trong 
    #email= "HoanfgAn.web@gmail.com"
    constructor(){
        this.data = ['item1', 'item2', 'item3'];
        this.name = "hoàng An ";
    }
    //getter
    get latest() {
        return this.data[this.data.length - 1];
    }
    //setter
    set latest(value) {
        this.data.push(value);
    }
    get Name() {
        return this.name
    }
    getEmails() {
        return this.#email
    }
    get email() {
        return this.#email
    }
    // cập nhật thuộc tính private 
    set email(value) {
        this.#email = value
    }
    
}
const f8 = new F8();
f8.latest = "item 4"
console.log(f8.latest);
console.log(f8.Name);
console.log(f8.email);
console.log(f8.getEmails());
// const users = ['Item', 'item2', 'item3'];
// Object.defineProperty