var contacts = [];

function addContact(name, phone, email) {
// nhận các đối số từ bên ngoài tương ứng vs các tham sô đã đặt 
  var contact = {
    name: name,
    phone: phone,
    email: email
  };
    contacts.push(contact);
    // thêm contact vào mảng contacts 
}

// Thêm một số người vào danh bạ
addContact("John Doe", "123-456-7890", "john@example.com");
addContact("Jane Smith", "987-654-3210", "jane@example.com");
console.log(contacts);
/////////////////////////////
var students = [];
// khởi tạo 1 mảng rồng 
function addStudent(name, scores) {
    // ạo 1 hàm chứa các đối số ở đây gồm tên và các điểm 
    var student = {
      // tạo ra 1 object để có thể push vào mảng 
    name: name,
    scores: scores
  };
  students.push(student);
}

function calculateAverage(scores) {
    // tham số đầu scores là tham số chứa tất cả các điểm muốn tính 
  var sum = scores.reduce(function(total, score) {
    return total + score;
  }, 0);
    // sum là số lượng giá trị sau khi đã được tồng hợp lại 
  return sum / scores.length;
}

// Thêm học sinh và tính điểm trung bình
addStudent("Alice", [85, 90, 78]);
addStudent("Bob", [92, 88, 75]);
addStudent("Carol", [76, 82, 95]);

for (var i = 0; i < students.length; i++) {
  var student = students[i];
    var average = calculateAverage(student.scores);
    // (student.scores) điểm của vị trí học sinh
    console.log(student.name + "'s average score: " + average);
    //student.name tên của học sinh ở bị tri thứ 
}
/////////////////////////////////////
var products = [];

function addProduct(name, price, stock) {
  var product = {
    name: name,
    price: price,
    stock: stock
  };
  products.push(product);
}

function checkStock(productName) {
    // productName là cái mà nó gọi ra  checkStock("Laptop") 
    // nếu cái mình gọi ra có trong mảng products thì nó sẽ cho ra số lượng mà nó có 
  var product = products.find(function(item) {
    return item.name === productName;
  });
  if (product) {
    return product.stock;
  } else {
    return 0;
  }  
}

// Thêm sản phẩm và kiểm tra tồn kho
addProduct("Laptop", 999, 10);
addProduct("Phone", 599, 20);

console.log("Stock of Laptop:", checkStock("Laptop"));
console.log("Stock of Phone:", checkStock("Phone"));
////////////////////////////
var accounts = [];

function createAccount(accountHolder, accountNumber, balance) {
  var account = {
    accountHolder: accountHolder,
    accountNumber: accountNumber,
    balance: balance
  };
  accounts.push(account);
}

function deposit(accountNumber, amount) {
  var account = accounts.find(function(item) {
    return item.accountNumber === accountNumber;
  });
  if (account) {
    account.balance += amount;
    console.log("Deposited", amount, "into account", accountNumber);
  } else {
    console.log("Account not found");
  }
}

function withdraw(accountNumber, amount) {
  var account = accounts.find(function(item) {
    return item.accountNumber === accountNumber;
  });
  if (account) {
    if (account.balance >= amount) {
      account.balance -= amount;
      console.log("Withdrawn", amount, "from account", accountNumber);
    } else {
      console.log("Insufficient balance");
    }
  } else {
    console.log("Account not found");
  }
}

// Tạo tài khoản và thực hiện giao dịch
createAccount("John Doe", "12345", 1000);
createAccount("Jane Smith", "67890", 1500);

deposit("12345", 500);
withdraw("67890", 200);

var orders = [];
var orderIdCounter = 1;

function addOrder(products) {
  var order = {
    orderId: orderIdCounter,
    products: products,
    total: calculateTotal(products)
  };
  orders.push(order);
  orderIdCounter++;
}

function calculateTotal(products) {
  var total = 0;
  for (var i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  return total;
}

// Thêm đơn hàng và tính tổng giá trị
addOrder([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 }
]);

console.log(orders);
