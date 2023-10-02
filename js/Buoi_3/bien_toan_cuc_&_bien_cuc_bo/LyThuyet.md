biến cục bộ 
- khai báo ở ngoài hàm 
- sử dụng ở khắp mọi nơi
VD 
function getMsg(){
    return msg;
}
fuction setMsg(value){
    msg = value
}
var msg = "F8";
setMsg("fullstack")
console.log(getMsg())


biến toàn cục 
- khai báo trước khi gọi hàm 
- khai báo trong phạm vi hàm 
- chỉ được sử dụng trong hàm đó và các hàm con 
VD
functions sum(a,b){
    var total = a +b;
    return total
} 
