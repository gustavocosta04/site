function cadastrar(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Aqui você pode adicionar lógica para armazenar os dados de cadastro (em um banco de dados, localStorage, etc.)
    
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
  }
  