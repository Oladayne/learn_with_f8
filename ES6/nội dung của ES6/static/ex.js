// static : thuộc tính , phương thức 
class f8 {
    constructor() {
        this.name = 'f8';
        this.email = 'contact@gmail.com';
    }
    // phương thức non stactic 
    getName() {
        return this.name;
    }
    static ceo = "Sơn Đặng";
    static getCEO() {
        return this.ceo;
    }
}
// phương thức , thuộc tính non-static => truy cập từ object , phụ thuộc vào object
// thuộc tính  static : không phụ thuộc vào object , truy cập từ tên class 
console.log(f8.ceo);
console.log(f8.getCEO());