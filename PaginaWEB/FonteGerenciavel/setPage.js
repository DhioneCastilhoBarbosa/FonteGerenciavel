
function setDateTime() {
  const dateInput= document.getElementById('date');
  const timerInput = document.getElementById('timer');
  const date = new Date().toLocaleDateString();
  dateInput.placeholder= date;
  const timer = new Date().toLocaleTimeString()
  timerInput.placeholder = timer;
}

function setPage() {
  let page = localStorage.getItem('page');

  //console.log(page)
  var link = document.querySelector('header>ul>li>a');
  page === "status-fonte" ? link.pathname = "/status-fonte.htm" : link.pathname = "/status-rack.htm";

  //console.log(link.pathname)
}

setPage();

