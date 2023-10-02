THÀNH PHẦN GIẢ
cấu trúc : 
selector::pseudo 


ví dụ 
.title::Before{
    content:"A";
}
.title::After{
    content:"B"
}
điều kiện kiên quyết thuộc tính content phải tồn tại để before hoặc after sử dụng đc
thuộc tính data-name=""
truyền thuộc tính HTML vào css 
bên css gần gọi thì phải sử dụng thuộc tính attr(data-name)

first-line{
    dòng đầu tiên 
} 
first-letter{
    chữ đầu tiên của văn bản 
}
selection{
    bôi đen và chuyển màu chữ sau khi bôi đen 
    chỉ áp dụng 2 thuộc tính background và color 
}
placeholder{
    chỉnh sửa và kế thừa 
    CURRENTCOLOR
}



LỚP GIẢ
Cấu trúc: 
selector:pseudo
phân biệt :
hover : trỏ tới 
active : click giữ 
focus: chỉ tồn tại trong form tại 1 điểm đã click vào thẻ
tabindex: đổi tag (đổi theo vị trí)
đổi 1 thẻ từ ko có focus sang có focus
not(selector): loại bỏ thuộc tính
first-child : con đầu của thẻ cha (nếu con ko dc khai báo thì ko hiện dc thuộc tính )
last-child: con cuối của thẻ cha 
first-of-type: lấy con đầu tiên trong đám có chung kiểu 
nth-child(vị trí): trỏ đến con thứ ... của thẻ cha 
nth-of-type(vị trí):trỏ đến vị trí kiểu của thẻ con 

Ví dụ 