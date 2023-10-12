// JS là ngôn ngữ lập trình bất đồng bộ 
const getA = () => {
    setTimeout(() => {
        console.log("getA");
    }, 1000);
};
const getB = () => {
    console.log("getB");
};
const getC = () => {
    console.log("getC");
}
// nếu động bộ mất 3 giây để hoàn thành 3 việc thì bất đồng bộ sẽ chỉ mất 1 giây , ưu điểm của nó là nhanh
// với bất đồng bộ phải xử lý các tiền trình có độ trễ ( lấy dữ liệu từ Server , gửi dữ liệu lên serve chờ phản hồi )
// có 3 cách để xử lý bất đồng bộ
// callback function 5
// object của ES6 promise 6
// async await function  7
const downloadImage = () => {
    setTimeout(() => {
        console.log("đang tải ảnh");
        if (typeof callback === 'function') {
            callback();
        }
    }, 1000);
}
const showMessage = () => {
    console.log("tải ảnh thành công");
}
downloadImage(showMessage);
// trường hợp của callback hell của ES5
const download1 = (callback) => {
    setTimeout(() => {
        if (typeof callback === 'function') {
            callback()
        }
    }, 1500);
}

const download2 = (callback) => {
    setTimeout(() => {
        console.log("ảnh 2");
        if (typeof callback === 'function') {
            callback()
        }
    }, 1000);
}


const download3 = (callback) => {
    setTimeout(() => {
        console.log("ảnh 3");
        if (typeof callback === 'function') {
            callback()
        }
    }, 500);
}
console.log("CALL BACK HELL");
download1(() => {
    download2(() => {
        download3(() => {
            console.log("đã tải xong ảnh");
        })
    })
})
// promise : là object dùng để xử lý các tiến trình bấy đồng bộ
// tên Object : promise => khởi tạo bằng từ khóa new
// trang thái của promise
/*
+ pending : chở xử lý 
+ fullfilled : xử lý hoàn thành 
+ reject : xử lý thất bại
 */
const getUser = () => {
    const user = ['user1', 'user2', 'user3'];
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
            // trường hợp ko lấy dc user 
            // reject("lỗi mạng");
        }, 1000);
    });
    return promise
};
// console.log(getUser());
// getUser()
//     .then((user) => {
//     console.log(user);
// })
//     .catch((error) => {
//         console.log(error);
// })
//     .finally(() => {
//         console.log("hoàn thành");
//     })

    const download11 = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("ảnh1")
                
            }, 1000);
        })
      
    }
    
    const download22 = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("ảnh3")
            }, 1500);
        })
    }
    
    
    const download33 = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("ảnh3")
                
            }, 500);
        })
}
// promise chaining 
download11().then((response) => {
    console.log(response);
    return download22();
})
    .then((response) => {
        console.log(response);
        return download33();
    })
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log("here");
    })