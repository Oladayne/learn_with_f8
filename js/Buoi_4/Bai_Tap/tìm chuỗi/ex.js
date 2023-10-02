// var content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eaque asperiores repellat rerum obcaecati optio blanditiis voluptate sit odio. Laudantium totam maiores rem officia, eligendi quasi nesciunt magnam rerum, adipisci ducimus sequi voluptas! Nobis, aliquam perferendis nesciunt quia sed beatae sint debitis veritatis quo ullam rem ipsum eum quibusdam dolorem porro, impedit adipisci harum quae rerum earum ipsam. Explicabo pariatur sed cupiditate, deleniti consectetur doloremque impedit nobis itaque eveniet vero, delectus omnis voluptatum mollitia placeat expedita, voluptas ipsam tempore alias corrupti a corporis adipisci odio architecto. Dignissimos, rerum ex. Debitis nihil numquam expedita facilis, cupiditate alias dolorum. Iste, ipsa architecto? Lorem`;


// var keyword = "LOREM";
// var heading = `<p> Tìm Kiếm với từ khóa : ${keyword}</p>`;



// //xử lý 
// var resurlt = "";
// var position = content.toLowerCase().indexOf(keyword.toLowerCase());
// var count = 0; 
// while (position !== -1) {
//     resurlt +=
//         content.slice(0, position) + `<span>${content.slice(position, position + keyword.length)}</span>`;
//     content = content.slice(position + keyword.length);
//     position = content.toLowerCase().indexOf(keyword.toLowerCase());
//     count++;
// }
// resurlt += content;
// var footer = `<p> Đã tìm thấy ${count} kết quả với từ khóa : ${keyword}</p>`;
// document.write(heading, resurlt, footer);



var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit omnis non suscipit, deserunt possimus
harum hic itaque, consectetur sapiente qui beatae asperiores porro deleniti voluptatem modi rerum pariatur ullam.`;

content = `<p>${content}</p>`

content = `${content}`.replaceAll(' ', `</p> <p>`);


var n = 0;
setInterval(function () {
    if (n === content.length) {
    n = 0;
    }
  var a = content.charAt(n);
  var b = content.charAt(n + 1);

  if (a === ">" && b !== " ") {
    document.getElementById("content").innerHTML =
      content.slice(0, n) + " " + `style = 'color: red '` + content.slice(n);
  }
  n++;
  
}, 20);


///

var content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit omnis non suscipit, deserunt possimus harum hic itaque, consectetur sapiente qui beatae asperiores porro deleniti voluptatem modi rerum pariatur ullam. '


var keyword = "";

//xử lý 
var resurlt = "";


document.getElementById("contents").innerHTML=content;

var i=0;
setInterval(function () {
  keyword+= content.charAt(i);
  if(content.charAt(i)===" "){
    console.log(keyword);
    
    resurlt = content.slice(0,i-keyword.length+1) + `<span>${keyword}</span>`+ content.slice(i);
    document.getElementById("contents").innerHTML=resurlt;
    keyword="";
  }
  i++;
  if (i === content.length) {
    i = 0;
  }
}, 200);
