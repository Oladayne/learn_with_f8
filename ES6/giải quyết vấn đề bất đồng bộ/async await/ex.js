const getUser = (userId) => {
    const users = [
        {
            id: 1,
            name: "user 1",
            salary: 500000,
        },
        {
            id: 2,
            name: "user 2",
            salary: 600000,
        },
        {
            id: 3,
            name: "user 3",
            salary: 700000,
        },
        {
            id: 4,
            name: "user 4",
            salary: 800000,
        },
    ];
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = users.find(({ id }) => id === userId);
            resolve(data);
        }, 1000);
    });
};
const lists = [1, 3, 4];
let salary = 0;
// lists.forEach(async (id) => {
//     const user = await getUser(id);
//     salary += user.salary;
//     user.salary = await getUser(id)
// });
// console.log(salary);
const getSalary = async () => {
    for (let id of lists) {
        const user = await getUser(+id);
        salary += user.salary;
    }
    console.log(salary);
}
getSalary();
// promise.all()-> xử lý nhiều promise cùng 1 lúc 
const list = [1, 3, 4];
const promises = list.map((id) => getUser(id));
Promise.all(promises).then((users) => {
    const salary = users.reduce((total, {
        salary
    }) => total + salary, 0);
    console.log(salary);
})