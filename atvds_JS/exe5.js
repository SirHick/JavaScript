const Login = (usuario, senha) => {
    if (usuario === "admin" && senha === "1234") {
        return "Login realizado com sucesso";
    } else {
        return "Usuário ou senha incorretos";
    }
}

console.log(Login("admin", "1234")); // Login realizado com sucesso
console.log(Login("Admin", "1236")); // Usuário ou senha incorretos