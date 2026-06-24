document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  const nomeInput = form.querySelector('[name="nome"]');
  const cpfInput = form.querySelector('[name="cpf"]');
  const emailInput = form.querySelector('[name="email"]');
  const telefoneInput = form.querySelector('[name="telefone"]');
  const estadoInput = form.querySelector('[name="estado"]');

  telefoneInput.addEventListener('input', function () {
    let valor = this.value.replace(/\D/g, '');
    if (valor.length > 2) {
      valor = '(' + valor.substring(0, 2) + ')' + valor.substring(2);
    }
    if (valor.length > 8) {
      valor = valor.substring(0, 9) + '-' + valor.substring(9, 13);
    }
    this.value = valor;
  });

  const mensagem = document.createElement('p');
  mensagem.id = 'mensagem';
  mensagem.style.textAlign = 'center';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.marginTop = '12px';
  form.appendChild(mensagem);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    mensagem.textContent = '';
    mensagem.style.color = 'red';

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpfInput.value.trim());
    const telefoneValido = /^\(\d{2}\)9\d{4}-\d{4}$/.test(telefoneInput.value.trim());

    if (!nomeInput.value.trim()) {
      mensagem.textContent = 'Informe o nome completo.';
      nomeInput.focus();
      return;
    }

    if (!cpfValido) {
      mensagem.textContent = 'CPF deve estar no formato XXX.XXX.XXX-XX.';
      cpfInput.focus();
      return;
    }

    if (!emailInput.checkValidity()) {
      mensagem.textContent = 'Informe um email válido.';
      emailInput.focus();
      return;
    }

    if (!telefoneValido) {
      mensagem.textContent = 'Telefone deve estar no formato (XX)XXXXX-XXXX.';
      telefoneInput.focus();
      return;
    }

    if (!estadoInput.value) {
      mensagem.textContent = 'Selecione um estado.';
      estadoInput.focus();
      return;
    }

    mensagem.style.color = 'green';
    mensagem.textContent = 'Inscrição enviada com sucesso! Redirecionando para login...';
    form.reset();

    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
  });
});