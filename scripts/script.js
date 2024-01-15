/*
 acessa o Dom por:
Tag : getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

// function dataAtual() {
//   alert(Date())
// }

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");


let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

let mapa = document.querySelector("#mapa");

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome válido";
    txt.style.color = "green";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#email");

  if (txtEmail.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    document.querySelector("#txtEmail").innerHTML = "E-mail inválido";
    document.querySelector("#txtEmail").style.color = "red";
  } else {
    document.querySelector("#txtEmail").innerHTML = "E-mail válido";
    document.querySelector("#txtEmail").style.color = "green";
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Texto muito grande, digite no max 100 caracteres ";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
  }
}

  function enviarForm() {
    if (nomeOk === true && emailOk === true && mensagemOk === true) {
      alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }

  function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
  }

  function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
  }

