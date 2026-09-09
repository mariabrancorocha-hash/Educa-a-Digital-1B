const botoesSaibaMais = document.querySelectorAll(".botao-saiba-mais");

botoesSaibaMais.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const informacoes = botao.nextElementSibling;

        informacoes.classList.toggle("aberta");

        if (informacoes.classList.contains("aberta")) {
            botao.textContent = "Mostrar menos 🌷";
        } else {
            botao.textContent = "Saiba mais 🌷";
        }

    });

});


const botoesReacao = document.querySelectorAll(".reacao");

botoesReacao.forEach(function(botao) {

    let curtiu = false;

    botao.addEventListener("click", function() {

        const texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }

    });

});
