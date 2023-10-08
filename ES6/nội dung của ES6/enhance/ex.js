//enhance 
const username = "hoàng an";
const email = "hoangan@gmail.com";
const age = undefined;
const address = "hà nội";
const user = {
    username,
    email,
    age,
    address
};
console.log(user);
const getName = function () {
    return "hoàng an";
};
const getEmail = function () {
    return "hoangan@gmail.com"
};
// const userss = {
//     getName: getName,
//     getEmail: getEmail
// }; cách cũ
// const users = {
//     getName: () => {
//         return "Hoàng An"
//     },
//     getEmail: () => {
//         return "hoangan@gmail.com"
//     },
// };
const uss = {
    getName() {
        return "hoàng an"
    },
    getEmail() {
        return "hoangan@gmail.com"
    }
}
console.log(uss);