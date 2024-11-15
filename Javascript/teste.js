
let nomes = ['Maria', 'jose', 'joao']

for (let i = 0; i <nomes.length ; i++){
    console.log("O nome é: " +nomes[i])
}

let saudacoes = 0;
while(saudacoes < nomes.length){
    console.log("O nome é: " + nomes[saudacoes])
    saudacoes++
}

function calculaArea(base, altura){
    return base*altura
}