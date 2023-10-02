# ngôn ngữ tiền sử lý scss
## cài trình biên dich 
1. cài đặt nodejs
=> học viên tự cài 
2. cài đặt SASS

## Biên dịch 
1. biên dịch cả folder file 
2. biên dịch 1 file 
3. nén file css từ file scss
sass đường dân file css  đường dẫn file css --style compressed

câu lệnh dẽ nhánh 
1. thiếu (1 nhánh)
if(condition)
2. đủ (2 nhánh )
if(condition){

}
else{

}
3. nhiều nhánh 

Kế thừa trong SCSS 
1. extend:
+ gom các đoạn css dùng chung thành 1 block riêng 
+ Tái sử dụng từ 1 selector có sẵn 
+ không áp dụng cho phân cấp 
2. placeholder
+ định nghĩa placeho        lder 
- % + tên placeholder
+ gọi placeholder 
- @extend %tenplacerholder
* khác extend ở đoạn ko sinh ra selector cha 
* sinh ra 1 secletor mới
3. mixin
3.1 : 
+ không tham số 
- dịnh nghĩa @ mixin 
- gọi @inclure
- nếu gọi @inclure class trong class thì nó sẽ hiểu là con 
- ngoài ra còn có thể bê nguyên css của chính nó ra ngoài nếu nó có class 
- gọi lồng thì nó sẽ tự động nối chuỗi 
3.2 : 
+ có tham số 
- định nghĩa @mixin tên ( biến )
- gọi vẫn là inclure 
 ##### Tạo file để import 
 _tên 
 VD @import "parts/variables";
    .container{
        @inclure center(text);
        div {
            width : 300px ;
            border: 1px solid $primaryColor 
        }
    }
###### Vòng lặp @for through 
for $i from 1 through{
    .col-#{$i}{
        width : #{ $i *10%
        }
    }
}
trường hợp set điều kiện 
@if $i % 2 == 0 {
    .col-#{$i}{
        width: #{$i*10%}
    }
}
vòng lặp each 
VD $sizes: 40 , 60 , 80 , 100;
@each $size in $sizes{
    .col-#{$size}{
        width: #{$size +0%}
    }
}
duyệt qua từng giá trị của biến 
 
trường hợp 
$sizes: (
    small: 40,
    medium : 60, 
    large : 80 
    larger: 100
);
@each $name , $size in $sizes{
    .col-#{$name}{
        width: #{$size +0%};
    }
}