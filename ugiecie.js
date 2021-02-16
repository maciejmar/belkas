

var ka;
var forr=document.getElementById("btn1");
var buttons = document.getElementsByTagName("button"); //returns a nodelist

console.log("bl - "+buttons.length);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    buttonsControl(this, i);
    setCookie("K",i,12);
    alert("ka   "+i);
    location.href = '/ugiecie-lf.html';

  }, false);

}


function buttonsControl(button, i) {
  console.log(i);
  console.log(button.id);
  alert("button i "+button.id);
}
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*



  document.forms['chK'].submit();
  const data = Object.fromEntries(new FormData(chK).entries());
  console.log("--------------  lfi = "+data.btn1,data.btn2,data.btn3,data.btn4);


var k;
rk= ['Swobodnie podparte belki i płyty 1-kier. lub 2.kier. zbrojone',
'Skrajne przęsła ciąłych belek i płyt', 'Wewnętrzne przęsła ciągłych belek i płyt',
'Wsporniki'];
kParam = [1,1.3,1.5,0.4];
btn1 = document.getElementById("btn1");
btn1.addEventListener("click", ()=>{
console.log("menu - 1");
ka=1.0;
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//window.location.replace="ugiecie-wyniki.html",true;
});
btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
console.log("menu - 2");
ka = 1.3;



});
btn3 = document.getElementById("btn3");
btn3.addEventListener("click", ()=>{
console.log("menu - 3");
ka = 1.5;




});
btn4 = document.getElementById("btn4");
btn4.addEventListener("click", ()=>{
console.log("menu - 4");
ka = 0.4;


});
// var mz ( Mz ) jest do przechwycenia z cookie
// ka - tabela; d,as1, fck, b,d, as1
//as1, b, d -

function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
setCookie("K", ka, 12);
alert('ka = '+ka);

*/
