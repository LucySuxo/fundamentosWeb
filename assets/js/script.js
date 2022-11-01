/*
  por Tag: getElementByTagName()
  por Id: getElementById()
  por Nome: getElementsByName()
  por Class: getElementsByClassName()
  por Seletor: querySelector()
  JS é um linguagem case Sensitive = reconhece letras maiusculas em minusculas
  */

let nome = window.document.getElementById('nome');
/*acessando o elemento por ID pelo DOM*/

let email = document.querySelector('#email');
/*pode usar input#email ou input.email (se for classe) */

let assunto = document.querySelector('#assunto');

let nomeOk = false;

let emailOk = false;

let assuntoOk = false;

let mapa = document.querySelector('#mapa');

/*acesso ao <DOM></DOM> ali em cima */
/*---------------------------------------*/

nome.style.width = '100%';
/*coloca o style da caixa do nome mais grande*/

email.style.width = '100%';
/**
 ---------------------------------------
 */

/*funções = blocos de codigo */

function validaNome() {
  let txtNome = document.querySelector('#txtNome');
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido';
    txtNome.style.color = 'red';
  } else {
    txtNome.innerHTML = 'Nome Válido';
    txtNome.style.color = 'green';
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail');
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido';
    txtEmail.style.color = 'red';
  } else {
    txtEmail.innerHTML = 'E-mail válido';
    txtEmail.style.color = 'green';
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto');
  if (assunto.value.length >= 500) {
    txtAssunto.innerHTML = 'Excedeu o limite de caracteres!';
    txtAssunto.style.color = 'red';
    txtAssunto.style.display = 'block';
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar');
  }
}

function mapaZoom() {
  mapa.style.width = '500px';
  mapa.style.heigth = '350px';
}

function mapaNormal() {
  mapa.style.width = '400px';
  mapa.style.heigth = '250px';
}
