//1.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site');

//2.Declare uma variável chamada nome e atribua a ela o valor "Lua".
let name = "Lua";
console.log(name);

//3.Crie uma variável chamada idade e atribua a ela o valor 25.
let age = 25;
console.log(age);

//4.Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;
console.log(`O número de vendas são: ${numeroDeVendas}`);

//5.Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;
console.log(`Seu saldo é: ${saldoDisponivel}`);

//6.Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos');

//7.Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(`${mensagemDeErro}`);

//8.Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
let nameUser = prompt('Como você se chama?');

//9.Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let ageUser = prompt('Qual é a sua idade?');

//10.Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(ageUser >= 18){
    alert('Pode tirar a habilitação!');
}

//11.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dayWeek = prompt('Qual é o dia da semana?');

if(dayWeek == Sábado){
    alert('Bom fim de semana!');
} else if (dayWeek == Domingo){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//12.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let number = prompt('Digite um numero');

if(number > 0){
    alert('O número é positivo');
} else if(number < 0){
    alert('O numero é negativo');
} else {
    alert('0 é numero neutro');
}

//13.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let point = 50;
console.log(point);

if(point >= 100){
    console.log('Parabéns, você venceu!');
} else{
    console.log('Tente novamente para ganhar!')
}

//14.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 50.00;
alert(`Seu saldo na conta é: ${saldoConta}`);

//15.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUser = prompt('What is your name?');
alert(`Welcome ${nomeUser}`);
