// vNammuoir i = 1;
// var total = 0;
// while (i <= 10) {
//     // console.log(`lần lặp thứ : ${i}`);
//     total+=i;
//     i++;
// }
// console.log(total)
// // while (true) {
    
// // }
var money = 5000000;
var Namtram = 0;
var Haitram = 0;
var Mottram = 0;
var Nammuoi = 0;
if (money % 50 === 0) {
    while (money > 0) {
        if (money >= 500000) {
            Namtram = money / 500000;
            Namtram = Namtram - (Namtram % 1);
            money -= Namtram *500000
        }
        if (200000 <= money < 500000) {
           Haitram = money / 200000;
           Haitram =Haitram - (Haitram % 1);
            money -=Haitram *200000
        }
        if (100000 <= money < 200000) {
           Mottram = money / 100000;
           Mottram =Mottram - (Mottram % 1);
            money -=Mottram *100000
        }
        if (money < 100000) {
            Nammuoi = money / 50000;
            Nammuoi = Nammuoi - (Nammuoi % 1);
            money -= Nammuoi *50000
        }
    }
}
console.log(Namtram, Haitram, Mottram, Nammuoi)
console.log("========")
for (var i = 1; i <= 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(`lan lặp thứ ${i}`)
}