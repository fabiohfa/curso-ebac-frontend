const form = document.getElementById('valorA-valorB');
const valorB = document.getElementById("numberB");
const valorA = document.getElementById("numberA");

function BmaiorA(valorA,valorB){
    return parseFloat(valorB) > parseFloat(valorA);
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const mensagemSucesso2 = `Sucesso! O valor <b>${valorB.value}</b> é maior que <b>${valorA.value}</b>`;

    formEvalido = BmaiorA(valorA.value,valorB.value);
    if(formEvalido){
        const containerMensagemSucesso2 = document.querySelector(".mensagem");
        containerMensagemSucesso2.innerHTML = mensagemSucesso2;
        containerMensagemSucesso2.style.display = 'block';

        valorB.value = '';
        valorA.value = '';
    }else {
        valorB.style.border = "1px solid red";
        document.querySelector('.b-menor').style.display = 'block';
        document.querySelector('.indicador::after').style.display = 'block';
    }
})

valorB.addEventListener('keyup',function(e){
    console.log(e.target.value);

    const currentValorA = valorA.value ? parseFloat(valorA.value) : 0;

    const formEValido = BmaiorA(currentValorA, e.target.value);

    if(!formEValido) {
        valorB.classList.add('error');
            document.querySelector('.indicador').style.display = 'block';
    } else {
        valorB.classList.remove('error');
        document.querySelector('.indicador').style.display = 'none';
    }
});