function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();
    const mensagem = document.getElementById("mensagem");
    const cpfFormat = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!nome || !cpf || !email || !senha || !confirmarSenha) {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    if (!cpfFormat.test(cpf)) {
        mensagem.style.color = "red";
        mensagem.textContent = "CPF deve estar no formato XXX.XXX.XXX-XX.";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.style.color = "red";
        mensagem.textContent = "As senhas nao coincidem.";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const cpfJaCadastrado = usuarios.some(usuario => usuario.cpf === cpf);

    if (cpfJaCadastrado) {
        mensagem.style.color = "red";
        mensagem.textContent = "Este CPF ja esta cadastrado.";
        return;
    }

    usuarios.push({
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}
