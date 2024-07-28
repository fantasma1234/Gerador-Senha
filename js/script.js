document.querySelector("#igerador").addEventListener('click', function () {
    const maiusculo = document.querySelector("#imaiuscula").checked
    const minusculo = document.querySelector("#iminuscula").checked
    const numero = document.querySelector("#inumero").checked
    const especial = document.querySelector("#iespecial").checked
    //const resposta = document.querySelector("#iresposta")

    const config = []

    if (maiusculo) {
        config.push("QWERTYUIOPASDFGHJKLZXCVBNM")
    }

    if (minusculo) {
        config.push("qwertyuiopasdfghjklzxcvbnm")
    }

    if (numero) {
        config.push("1234567890")
    }

    if (especial) {
        config.push("!@#$%¨&*()_-+=^~~?/\\,")
    }

    if (config.length == 0) {
        Toastify({
            text : "Seleciona pelo menos uma das caixas", duration: 2000, style: {
                background: '#ff0000'
            }
        }).showToast();
    }

    let senha = geradorSenha(tamanho(), config)

    document.querySelector('#isenha').value = senha

    document.querySelector("#iresposta").classList.add('show')
})

function tamanho() {
    const tamanho = document.querySelector("#itamanho").value

    return tamanho
}

function caracterAleatorio(lista) {
    const indexRandom = Math.floor(Math.random() * lista.length) 

    return lista[indexRandom][Math.floor(Math.random() * lista[indexRandom].length)]

}

function geradorSenha(tamanho, lista) {
    let senha = ""

    while (senha.length < tamanho) {
        senha += caracterAleatorio(lista)
    }

    return senha
}

document.querySelector("#copiar").addEventListener('click', function() {
    navigator.clipboard.writeText(document.querySelector('#isenha').value)

    Toastify({
        text : "Senha copiada", duration: 2000, style: {
            background: '#00FF7F'
        }
    }).showToast();
})