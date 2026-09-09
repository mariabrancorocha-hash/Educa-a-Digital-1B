// ===============================
// BOTÕES "SAIBA MAIS"
// ===============================

const botoesSaibaMais = document.querySelectorAll(".botao-saiba-mais");

botoesSaibaMais.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const informacoes = botao.nextElementSibling;

        informacoes.classList.toggle("aberta");

        if (informacoes.classList.contains("aberta")) {
            botao.textContent = "Mostrar menos 🌷";
        } else {
            botao.textContent = "Saiba mais 🌷";
        }

    });

});


// ===============================
// BOTÕES DE REAÇÃO
// ===============================

const botoesReacao = document.querySelectorAll(".reacao");

botoesReacao.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const contador = botao.querySelector("span");

        let quantidade = Number(contador.textContent);

        if (!curtiu) {

            quantidade++;

            curtiu = true;

            botao.classList.add("ativo");

        } else {

            quantidade--;

            curtiu = false;

            botao.classList.remove("ativo");

        }

        contador.textContent = quantidade;

    });

});

