script.js

// Verifica se o usuário está logado e atualiza o botão de login/logout
function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    const authButton = document.getElementById('auth-button');

    if (user) {
        authButton.innerText = 'Sair';
    } else {
        authButton.innerText = 'Entrar';
    }
}

// Alterna entre login e logout
function toggleLogin() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        // Realiza o logout
        localStorage.removeItem('user');
        window.location.href = 'Pagina_inicial.html'; // Redireciona para a página inicial após logout
    } else {
        // Redireciona para a página de login
        window.location.href = 'Login.html';
    }
}

// Lidar com o formulário de login
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Armazena os dados do usuário no localStorage
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    // Redireciona para a página inicial após login
    window.location.href = "Pagina_inicial.html";
});

// Chama a função para verificar o status de login assim que a página for carregada
checkLoginStatus();