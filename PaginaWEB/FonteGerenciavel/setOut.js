


function setOut() {
  let page = localStorage.getItem('page');
  console.log(page)
  let leght =0;
  page==="status-rack"? leght=8: leght=1

  var teste = document.getElementById('controllerSaida').children[0].children[0]
  console.log(teste)

  
 var element=""
 
 let titleTable=` <tr>
 <th>ID</th>
 <th>Nome</th>
 <th>Status</th>
 <th>Controle</th>
</tr>`

  for (var i = 1; i <=leght; i++) {

    var html = `<tr>
    <td><strong>Saída `+i+`</strong></td>
    <td>Servidor</td>
    <td>Ativa</td>
    <td><select name="led`+i+`">
      <option value="1" ~ledSelected(`+i+`,true)~>On</option>
      <option value="0" ~ledSelected(`+i+`,false)~>Off</option>
    </select></td>
  </tr>`
    
    element+= html;           

  }

 teste.innerHTML= titleTable+element
}

setOut();
