var username = prompt('Inserisci nome');
document.getElementById('username').innerHTML = username;

var gioca = document.getElementById("gioca");
gioca.addEventListener('click',
function() {
  var dadouser = Math.floor(Math.random() * 6) + 1;
  console.log(dadouser);
  var dadocpu = Math.floor(Math.random() * 6) + 1;
  console.log(dadocpu);


  if (dadouser > dadocpu){
    document.getElementById('esito').innerHTML = 'vittoria';
  }
  else if (dadocpu > dadouser) {
    document.getElementById('esito').innerHTML = 'sconfitta';
  }
  else {
    document.getElementById('esito').innerHTML = 'pareggio';
  }

  if (dadouser == 1) {
    document.getElementById('uno-user').className += "show";
  }
  else if (dadouser == 2) {
    document.getElementById('due-user').className += "show";
  }
  else if (dadouser == 3) {
    document.getElementById('tre-user').className += "show";
  }
  else if (dadouser == 4) {
    document.getElementById('quattro-user').className += "show";
  }
  else if (dadouser == 5) {
    document.getElementById('cinque-user').className += "show";
  }
  else {
    document.getElementById('sei-user').className += "show";
  }

  if (dadocpu == 1) {
    document.getElementById('uno-cpu').className += "show";
  }
  else if (dadocpu == 2) {
    document.getElementById('due-cpu').className += "show";
  }
  else if (dadocpu == 3) {
    document.getElementById('tre-cpu').className += "show";
  }
  else if (dadocpu == 4) {
    document.getElementById('quattro-cpu').className += "show";
  }
  else if (dadocpu == 5) {
    document.getElementById('cinque-cpu').className += "show";
  }
  else {
    document.getElementById('sei-cpu').className += "show";
  }
}
);

var rigioca = document.getElementById("rigioca");
rigioca.addEventListener('click',
function() {
  document.getElementById('esito').innerHTML = '';
}
);
