
var path = window.location.pathname;
path = path.split("/").pop().replace(".htm", "");

localStorage.setItem('page',path)
testPage();


function testPage() {
  var link= document.querySelector('header>ul>li>a');
  path === "status-fonte" ? link.pathname="/status-fonte.htm" : link.pathname="/status-rack.htm";
  path === "status-fonte" ? activeOut(1) : activeOut(8);
  //console.log(link.pathname)
}

function activeOut(leght) {

  for (var i = 1; i <= leght; i++) {
    var element = '#saida-' + i + '>p';
    var id = 'saida-' + i;
    console.log(id)
    var tagP = document.querySelector(element).textContent;
    var selectId = document.getElementById(id);
    var img = document.getElementById(id).children[0].children[0]
    tagP==="Ativa"? img.src='eletric-green.png': img.src='eletric-red.png'
    tagP === "Ativa" ? selectId.style.background = "#00A335" : selectId.style.background = "#E10606";

  }

  

}


