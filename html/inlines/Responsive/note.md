# Responsive Web Design
# Adaptive

- Tạo ra 1 phiên bản giao diện khác 
- Dựa vào thiết bị 


# Responsive

- thiết kế web đáp ứng 
- dùng Css 
- dựa vào kích thước trình duyệt 


# Breakpoint 

- Điểm dùng kích thước màn hình mà tại đó giao diện sẽ thay đổi để chuyển qua thiết bị khác
- không có breakpoint cố định cho tất cả các dự án 
- tìm hiểu các breakpoint phổ biến 
+ point phổ biến 
    - 576px
    - 768px
    - 992px
    - 1200px
    - 1400px


## Media Queries
@media all| squeen|print and (min-width|max-width : breakpoint){
    selector {
        property:value
    }
}
'''
# muốn viết cho nhiều màn hình thì chỉ nên để 1 chiều 
1 là max-width 
2 là min-width 
Giá trị từ to nhất giảm dần 
desktop-first


# MOBILE-FIRST 