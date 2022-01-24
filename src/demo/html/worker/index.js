let time = new Date('2020-07-23');
let nowTime = new Date();

let s = time - nowTime;

setInterval(function () {
  s = s - 1000;
  postMessage(s);
}, 1000);
