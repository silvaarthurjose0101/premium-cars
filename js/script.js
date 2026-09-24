/* barra na página produtos */

function abrirMenu() {
    const menu = document.getElementById("menuLateral");

    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}

/* LOGIN E CADASTRO */

function cadastrar() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail ou senha inválida!");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Conta criada com sucesso!");

    window.location.href = "login.html";
}

function entrar() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail ou senha inválida!");
        return;
    }

    let emailSalvo = localStorage.getItem("email");
    let senhaSalva = localStorage.getItem("senha");

    if (email === emailSalvo && senha === senhaSalva) {

        localStorage.setItem("usuarioLogado", email);

        alert("Login realizado com sucesso!");

        window.location.href = "home.html";

    } else {

        alert("E-mail ou senha incorretos!");

    }
}

function mostrarSenha() {

    let campoSenha = document.getElementById("senha");

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
    } else {
        campoSenha.type = "password";
    }
}

/* VERIFICA USUÁRIO LOGADO */

window.onload = function () {

    let usuario = localStorage.getItem("usuarioLogado");
    let areaUsuario = document.getElementById("areaUsuario");

    if (usuario && areaUsuario) {

        areaUsuario.innerHTML = `
            <span class="email-usuario">${usuario}</span>
            <button class="btn-sair" onclick="sair()">Sair</button>
        `;
    }
}

function sair() {

    localStorage.removeItem("usuarioLogado");

    alert("saiu da conta com sucesso!");

    window.location.reload();
}

window.onload = function(){

    let email = localStorage.getItem("email");

    if(email){

        document.getElementById("areaUsuario").innerHTML = `
            <span class="email-usuario">${email}</span>
            <button class="login-btn" onclick="sair()">Sair</button>
        `;
    }

}

function sair(){

    localStorage.removeItem("email");
    localStorage.removeItem("senha");

    window.location.href = "home.html";

}