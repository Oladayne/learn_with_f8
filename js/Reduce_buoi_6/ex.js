//vòng lặp reduce có 2 tham số
/*- callback : nhận vào 3 tham số 

+preValue:

* nếu ko có giá trị khởi tạo pre lần đầu là phần tử đầu tiên 
* nếu có giá trị khởi tạo pre là giá trị khởi tạo 
* return của lần trước là pre của lần sau 

+CurrentValue: Value của từng phần tử mảng 

+Index : index của từng phần tử mảng 
-initialValue là giá trị khởi tạo

=> giá trị trả về của reduce là giá trị return cuối cùng của callback 
*/
var numbers = [5, 10, 15, 20, 25];
var result = numbers.reduce(function (pre, current, index) {
    console.log(pre, current);
    return current;
}, 0);
//VD
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Kết quả: 15
// bài tập tìm max 
var numbers = [5, 2, 1, 9, 8];
var con = numbers.reduce(function (pre, current){
    if (pre > current) {
       return pre
    }
    return current
});
        console.log(con);
//bài tập tìm phần tử có trong mảng thứ nhất nhưng ko có trong mảng thứ 2 
var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];
//kết quả thu dc [5,9]
var con = arr1.reduce(function (pre, current) {
    if (!arr2.includes(current)){
        console.log(current);
        pre.push(current);
    }
    return pre
},[])
console.log(con);


// array like object 
function sum(...arguments) {
    console.log(arguments);
    Array.from(arguments).forEach(function (item) {
        console.log(item);
    });
};
//chuyển thành mảng bằng  Array.from


//clone Array 
var a = ["Hoàng An", "hoangan@gmail.com"];
var b = Array.from(a);// bất kể hàm nào sinh ra mảng 
b[0] = "Hoàng An F8";
console.log(a);
console.log(b);

var sources = [
    {
        srcimg: "https://i.pinimg.com/564x/7b/16/6e/7b166e10e0ba404ff85cc491f692439c.jpg",
        title: "Tiêu đề bài viết 1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "https://i.pinimg.com/564x/7b/16/6e/7b166e10e0ba404ff85cc491f692439c.jpg",
        title: "Tiêu đề bài viết 2",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "https://i.pinimg.com/564x/7b/16/6e/7b166e10e0ba404ff85cc491f692439c.jpg",
        title: "Tiêu đề bài viết 3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "https://i.pinimg.com/564x/7b/16/6e/7b166e10e0ba404ff85cc491f692439c.jpg",
        title: "Tiêu đề bài viết 4",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    }
];


    var htmlSource = `
    <li class="item">
        <div class="img">
            <img src="${sources[0].srcimg}" alt="img">
        </div>
        <div class="content-item-wrap">
            <h2 class="title">${sources[0].title}</h2>
            <p class="content-item">${sources[0].content}</p>
        </div>
    </li>
    `;
    

const listContent = document.getElementById("list-content");
listContent.innerHTML = htmlSource;