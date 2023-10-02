var inputRangeList = document.querySelectorAll('[type="range"]');
// var overEvent = new Event("over");
var overEvent = new CustomEvent("over", { detail: "f8" });
if (inputRangeList.length) {
    inputRangeList.forEach(function (inputRange) {
        inputRange.addEventListener('mousemove', function () {
            var value = (this.offsetX * 100) / this.clientWidth;
            value = value.toFixed(2);
            this.data = value;
            this.dispatchEvent(overEvent);
        })
    })
}