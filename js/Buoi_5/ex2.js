var query = [

    ["name", "F8"],
    ["keyword", "Fullstack"],
    ["category", 1],
];
var LA = query.map(function (value) {
    return value.join("=");
}
)
    .join("&");
console.log(LA);
