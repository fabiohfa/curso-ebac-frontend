const form = document.getElementById('valorA-valorB');
const valorB = document.getElementById("numberB");
const valorA = document.getElementById("numberA");
let formJaSubmetido = false;
document.querySelector('.indicador').style.display = 'none';

function BmaiorA(valorA,valorB){
    return (parseFloat(valorB) >= parseFloat(valorA));
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const mensagemSucesso2 = `Sucesso! O valor <b>${valorB.value}</b> é maior que <b>${valorA.value}</b>`;
    const formEvalido = BmaiorA(valorA.value,valorB.value);
    formJaSubmetido = true;
    
    if(formEvalido){
        const containerMensagemSucesso2 = document.querySelector(".mensagem");
        containerMensagemSucesso2.innerHTML = mensagemSucesso2;
        containerMensagemSucesso2.style.display = 'block';
        valorB.style.border = "";

        valorB.value = '';
        valorA.value = '';
    }else {
        valorB.style.border = "1px solid red";
        document.querySelector('.b-menor').style.display = 'block';
    }
})

document.addEventListener('keyup',function(e){
    console.log(e.target.value);

    const currentValorA = valorA.value ? parseFloat(valorA.value) : 0;
    const currentValorB = parseFloat(valorB.value);

    //const currentValorA = parseFloat(valorA.value);
    //const currentValorB = parseFloat(valorB.value);

    const formEValido = BmaiorA(currentValorA, currentValorB);

    if(!formEValido) {
        valorB.classList.add('error');
            document.querySelector('.indicador').style.display = 'block';
            document.querySelector('.mensagem').style.display = 'none';
    } else {
        valorB.classList.remove('error');
        valorB.style.border = "";
        document.querySelector('.indicador').style.display = 'none';
        if (!formJaSubmetido) {
            document.querySelector('.mensagem').style.display = 'block';
            formJaSubmetido = false;
        }
    }
});
