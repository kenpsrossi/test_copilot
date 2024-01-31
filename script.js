// script.js

function validarNome(nome) {
    return nome !== '';
}

function validarEmail(email) {
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
}

function validarTelefone(telefone) {
    var re = /^(\(\d{2}\)\s)?\d{4,5}-\d{4}$/;
    return telefone === '' || re.test(telefone); // telefone não é obrigatório
}

function updateFeedback(id, isValid) {
    var element = document.getElementById(id);
    if (isValid) {
        element.style.color = '#00FF00';
    } else {
        element.style.color = '#FF0000';
    }
}

function handleInput(event) {
    var isValid;
    switch (event.target.id) {
        case 'nome':
            isValid = validarNome(event.target.value);
            break;
        case 'email':
            isValid = validarEmail(event.target.value);
            break;
        case 'telefone':
            isValid = validarTelefone(event.target.value);
            break;
    }
    updateFeedback(event.target.id, isValid);
}

function handleSubmit(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    if (!validarNome(nome) || !validarEmail(email) || !validarTelefone(telefone)) {
        alert('Por favor, corrija os erros antes de enviar o formulário.');
        event.preventDefault();
    } else {
        alert('Formulário enviado com sucesso!');
    }
}

window.onload = function() {
    document.getElementById('nome').addEventListener('input', handleInput);
    document.getElementById('email').addEventListener('input', handleInput);
    document.getElementById('telefone').addEventListener('input', handleInput);
    document.querySelector('form').addEventListener('submit', handleSubmit);
}
