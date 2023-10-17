// async await -> ES7
// async function =>  luôn trả về 1 promise
// muốn resole 1 promise => dùng từ khóa await trc function cần gọi
// const getUser = async () => {
//     const user = ["hoàng an", "Anh Quân"];
//     return
// }
const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("f8");
        }, 1000);
    });
};
const showUser = async () => {
    const user = await getUser();
    // mỗi 1 lần await là 1 lần then 
    console.log(user);
    console.log("Hoàn Thành");
};
showUser();
// kiểu IIFE
(async () => {
    const user = await getUser();
    console.log(user);
})();
const download11 = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("ảnh1")
            
        }, 1000);
    })
  
}
// thực hành 
const download22 = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("ảnh2")
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
(async () => {
    const download1 = await download11();
    console.log(download1);
})();
(async () => {
    const image3= await download22();
    console.log(image3);
})();
(async () => {
    const download3 = await download33();
    console.log(download3);
})();