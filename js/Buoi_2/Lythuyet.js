var action = "create";
switch (action) {
    case "create":
        console.log("thêm")
        break;
        case "create":
            console.log("Sửa")
            break;
            case "create":
                console.log("Xóa")
                break;
    default:
        console.log("Danh Sách" );
        break;
}
if (action === "create") {
    console.log("thêm")
} 
else if (action === "edit"){
    console.log("Sửa")
}
else if (action === "delete") {
    console.log("xóa")
}
else{
    console.log("danh sách")
}
function max() {
    if (arguments.length) {
        var result = arguments[0];
        for (var i = 0; i < arguments.length; i++){
            var value = arguments[i];
            if (result < value) {
                result = value;
            }
        }
        return result;
  }
    return false;
}
console.log(max());

function concat(str, ...args) {
    str += "";
    if (args.length) {
        for (var i = 0; i < args.length; i++){
            str = str+args[i] ;
        }
    }
    return str;
}
console.log(concat("Hoàng An", "f8", "f9", "f10"));