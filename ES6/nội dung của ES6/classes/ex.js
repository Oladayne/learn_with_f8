// classes
class User{ 
    // định nghĩa các phương thức và thuộc tính
    // hàm khởi tạo : constructor()
    constructor() {
        console.log("hàm này sẽ chạy khi object được khởi tạo");
        // định nghĩa các  thuôc tính 
        this.name = "hoàng an";
        this.email = "hoangan@gmail.com";
    }
    // định nghĩa các phương thức 
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
}
const user = new User();
console.log(user);
console.log(user.getName());
class Authencation extends User { 
    constructor(name, email) {
        super(name, email);
        this.isLogin = true;
    }
    getInfo() {
        return this.getName() + "-" + this.getEmail();
    }
}
class Authorization extends Authencation{
    constructor(name, email) {
        super(name, email);
        this.role = "subciber"
    }
    getRole() {
        return this.role;
    }
}
const authorize = new Authorization("hoàng an", "hoangan@gmail.com");
console.log(authorize.getRole());
console.log(authorize.getEmail());
// expression class 
const Customer = class {
    constructor() {
        this.name = "Hoàng An";
        this.email = "Hoangan@gmail.com";
    }
};
const customer = new Customer();
console.log(customer);
customElements.define('hello-world', class extends HTMLElement {
    connectedCallback() {
        this.innerText = `Hello F8`;
    }
},);
setTimeout(() => { }, 1000);