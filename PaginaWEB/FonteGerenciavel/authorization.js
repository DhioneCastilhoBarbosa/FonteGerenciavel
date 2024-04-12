

document.addEventListener('keypress', function(e){
  if(e.which == 13){
    authenticate();
  }
}, false);


const rack= "status-rack.htm";
const fonte= "status-fonte.htm";
let device = "";


function getDevice(){

  const plataforma = device==="Rack"? rack:fonte;
  
  return plataforma;
}


function authenticate() 
{

 

  device = document.getElementById("device").textContent
  
  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  
  var authUsername = "intelbras"; // mudar par cadastros na flash do micro
  var authPassword = "admin123"; // mudar par cadastros na flash do micro
  if (username ===authUsername && password ===authPassword){
    window.location.href = getDevice();
  }
  else{
    swal({
      title: "Oops...",
      text: "Usuario ou senha estão incorretos. Tente novamnete.",
      icon: "error",
      button: "OK",
    });
  }
}
