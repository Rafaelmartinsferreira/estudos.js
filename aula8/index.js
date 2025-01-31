const nomeCompleto = 'Rafael Martins Ferreira';
const idade = 21;
const peso = 70;
const altura = 1.80;

let imc;    //peso / (altura * altura)
let anoNascimento;


imc = peso / (altura * altura);      
anoNascimento = 2025 - idade;


/*console.log(nomeCompleto, 'tem', idade, 'anos, pesa', peso, 'kg');*/
console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg`);

console.log('tem', altura, 'de altura e seu IMC é de', imc.toFixed(2));
console.log(nomeCompleto, 'nasceu em', anoNascimento);