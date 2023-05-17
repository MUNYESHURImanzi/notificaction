var btn = document.querySelector(".text2");
btn.addEventListener("click", () => {
  document.querySelector(".text2").style.backgroundColor = "white";
});

var btn1 = document.querySelector("#text1");
btn1.addEventListener("click", () => {
  document.querySelector("#text1").style.backgroundColor = "white";
});
var b0tn = document.querySelector("#text3");
b0tn.addEventListener("click", () => {
  document.querySelector("#text3").style.backgroundColor = "white";
});
var butun = document.querySelector("#text4");
butun.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".bood").style.display = "";
  document.querySelector("#text4").style.backgroundColor = "white";
});

var butoo = document.querySelector("#text5");
butoo.addEventListener("click", () => {
  document.querySelector("#text5").style.backgroundColor = "white";
});

var last = document.querySelector("#text6");
last.addEventListener("click", () => {
  document.querySelector("#text6").style.backgroundColor = "white";
});

var last = document.querySelector("#text7");
last.addEventListener("click", () => {
  document.querySelector("#text7").style.backgroundColor = "white";
});

var text = document.querySelector(".bood");
document.querySelector(".bood").style.display = "none";
document.querySelector("span").innerHTML = "3";

var note = document.querySelector(".notify");
note.addEventListener("click", () => {
  document.querySelector(".text2").style.backgroundColor = "white";
  document.querySelector("#text1").style.backgroundColor = "white";
  document.querySelector("span").innerHTML = "0";
  document.querySelector("#text3").style.backgroundColor = "white";
  document.querySelector("#text4").style.backgroundColor = "white";
  document.querySelector("#text5").style.backgroundColor = "white";
  document.querySelector("#text6").style.backgroundColor = "white";
  document.querySelector("#text7").style.backgroundColor = "white";
});
