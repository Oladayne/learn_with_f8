căn chỉnh các item theo hướng song song với trục chính 
flex-start 
flex-end 
center 
...
align-item căn chỉnh các item theo hướng vuông góc với trục chính 
flex-start: vị trí ban đầu 
flex-start: vị trí cuối cùng 
center: vị trí ở giữa 
base-line
...
flex-wrap:khi các con vượt quá chiều thì sẽ bẻ xuống
mặc định sẽ là no-wrap
...
align-content: căn chỉnh các hàng và cột theo hướng vuông góc với trục chính 
chỉ áp dụng khi có nhiều hàng và nhiều cột 
...
gap: khoảng cách giữa các đối tượng 
row-gap : khoảng các hàng
column-gap: khoảng cách cột 

# FLEX ITEM 
flex-grow : chia tỉ lệ bằng số nguyên , dãn đều các item để lấp đầy vị trí còn trống của flex container 
flex-shrink: co lại các content sau khi bị tràn ra khỏi flex container 
* nếu không muốn nó co lại để giá trị 0 
...
# FLEX BASIS
thay đc cho with vs height 
căn chỉnh chiều cao hoặc chiều ngang theo trục chính 
bị chặn bởi min-with max-with nếu flex-derection là row h
bị chặn bởi  min-height max-height nếu flex-derection là column
khi dùng flex-basis thuộc tính width , height sẽ không ghi đè được 
...
# FLEX
giá trị tính theo quy ước 
flex-basis tính bằng px
flex-shrink 
flex-grow
...
# ORDER 
sắp xếp các item
chấp nhận cả giá trị âm 

