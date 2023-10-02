// var tong = 0;
// var sochan =0;
// var avg;
// for (var i = 1; i <= 21; i++){
//     if (i % 2 === 0) {
//         sochan += i
//         tong++
//     }
// }
// avg = sochan / tong;
// console.log(`tong = ${avg}`);
var n = 18
var check = true;//giả định là số nguyên tố 
if (n % 1 !== 0 || n <= 1) {
    check = false;
}
else {
    for (var i = 2; i < n; i++){
        if(n%i===0){
            check = false;
            i=n //thoát vòng lặp có thể sử dụng break 
        }
    }
}
console.log(check)