let campodigitePalavra = document.querySelector(".campo__descobrir__palavra");
const btnVerificaPalavra = document.querySelector(".botao__verificar__palavra");

campodigitePalavra.addEventListener('keyup', function() {
    let valorCampo = campodigitePalavra.value;
    console.log(valorCampo);
})

btnVerificaPalavra.addEventListener('click', function() {
    return valorCampo.textHtml;
})