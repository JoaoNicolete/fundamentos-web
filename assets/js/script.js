// declarando variáveis

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

// modificando estilo
nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

// função que valida nome
function validaNome(){
	let txtNome = document.querySelector('#txtNome')
	if(nome.value.length < 3){
		txtNome.innerHTML = 'nome inválido'
		txtNome.style.color = 'red'
	} else {
		txtNome.innerHTML = 'nome válido'
		txtNome.style.color = 'green'
		nomeOk = true
	}
}

// função que valida email
function validaEmail(){
	let txtEmail = document.querySelector('#txtEmail')
	if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
		txtEmail.innerHTML = 'Email Inválido'
		txtEmail.style.color = 'red'
	} else {
		txtEmail.innerHTML = 'Email válido'
		txtEmail.style.color = 'green'
		emailOk = true
	}
}

// função que valida assunto
function validaAssunto(){
	let txtAssunto = document.querySelector('#txtAssunto')
	if (assunto.value.length >= 100){
		txtAssunto.innerHTML = 'Máximo 100 caracteres'
		txtAssunto.style.color = 'red'
		txtAssunto.style.display = 'block'
	} else {
		txtAssunto.style.display = 'none'
		assuntoOk = true
	}
}

// função que mostra o alerta quando você aperta enviar, checando se os dados foram preenchidos
function enviar(){
	if(nomeOk == true && emailOk == true && assuntoOk == true){
		alert ('Formulário enviado com sucesso')
	} else {
		alert ('Preencha o formulário corretamente')
	}
}

// função que dá zoon no mapa
function mapaZoon(){
	mapa.style.width = '800px'
	mapa.style.height = '800px'
}

// função que volta o mapa ao normal
function mapaNormal(){
	mapa.style.width = '600px'
	mapa.style.height = '450px'
}






