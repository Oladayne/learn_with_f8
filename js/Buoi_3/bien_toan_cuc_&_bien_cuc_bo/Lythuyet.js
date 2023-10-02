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
    console.log(str);
    console.log(args);
}
console.log(concat("Hoàng An", "f8", "f9", "f10"));
