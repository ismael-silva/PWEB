function validar() {
    var nome = document.nomeform.elements["nome"].value;
    var email = document.nomeform.elements["email"].value;
    var comentario = document.nomeform.elements["comentario"].value;
    var pesquisa = document.nomeform.elements["pesquisa"].value;

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("O email deve conter '@' e '.'");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    if (pesquisa !== "sim" && pesquisa !== "nao") {
        alert("Por favor, escolha uma opção na pesquisa.");
        return false;
    }

    if (pesquisa === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

    return true; // Envie o formulário se todas as validações passarem
}
