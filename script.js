function fazerLogin() {
  const cpf = document.getElementById("cpf").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");
  const cpfFormat = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!cpfFormat.test(cpf)) {
    mensagem.style.color = "#e74c3c";
    mensagem.innerText = "CPF deve estar no formato XXX.XXX.XXX-XX.";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpf && usuario.senha === senha);

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    mensagem.style.color = "green";
    mensagem.innerText = "Login realizado com sucesso!";
    setTimeout(() => window.location.href = "painel.html", 700);
  } else {
    mensagem.style.color = "#e74c3c";
    mensagem.innerText = "CPF ou senha incorretos!";
  }
}