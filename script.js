alert("O JavaScript está funcionando!");

const botoesReacao = document.querySelectorAll(".reacao");

botoesReacao.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const contador = botao.querySelector("span");

        let numero = Number(contador.textContent);

        numero = numero + 1;

        contador.textContent = numero;

    });

});

