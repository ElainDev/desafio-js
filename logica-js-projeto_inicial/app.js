//--------------------------------------------------------- ALERT, CONSOLE, TEMPALTE STRING, PROMPT ----------------------------------------------------------------------------


/*//1.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
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

//--------------------------------------------------------- IF-ELSE ----------------------------------------------------------------------------

//10.Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(ageUser >= 18){
    alert('Pode tirar a habilitação!');
}else{
    alert('Não pode dirigir')
}

//11.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dayWeek = prompt('Qual é o dia da semana?');

if(dayWeek == 'Sabado'){
    alert('Bom fim de semana!');
} else if (dayWeek == 'Domingo'){
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

//--------------------------------------------------------- WHILE ----------------------------------------------------------------------------

//16.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
}

//17.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0) {
    alert(contador2);
    contador2--;
}

//18.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagem = prompt('Digite um número');

while (contagem >= 0) {
    alert(contagem);
    contagem--;
}

//19.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagem2 = prompt('Digite um número');
let contador3 = 0

while (contador3 <= contagem2) {
    alert(contador3);
    contador3++;
}

//--------------------------------------------------------- EXTRA ----------------------------------------------------------------------------

//20.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let welcomeMessage = 'Seja bem vindos(a)!';
console.log(welcomeMessage);

//21.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Ana';
console.log(`Olá, ${nome}`);

//22.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`)

//23.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let language = prompt('Qual linguaem de programação que você mais gosta?');
console.log(language);

//24.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 6;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//25.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultado1 = valor1 - valor2;
console.log(`A substração de ${valor1} e ${valor2} é igual a ${resultado1}.`);

//26.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade1 = prompt('Qual é a sua idade?');
let maiorOuMenor = idade1 > 18 ? 'Você é de maior' : 'Você é de menor';
alert(maiorOuMenor)

//27.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número:');
if (numero > 0) {
    alert(`${numero} é positivo`);
} else if (numero < 0) {
    alert(`${numero} é negativo`);
} else{
    alert(`${numero} é zero`);
}

//28.Use um loop while para imprimir os números de 1 a 10 no console.
let contar = 1
while (contar < 11) {
    console.log(contar);
    contar++;
}
//29.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6.05;

if (nota >= 7) {
    console.log('Aproado');
} else {
    console.log('Reprovado');
}

//--------------------------------------------------------- MATH.RANDOM ----------------------------------------------------------------------------

//30.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//31.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

//32.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio2);
*/
//--------------------------------------------------------- FUNÇÃO ----------------------------------------------------------------------------------

//32.Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log('Olá, mundo!');
}

exibirNome();

//33.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(name1) {
    alert(`Olá, ${name1}`);
}

exibirNome('Ana');

//34.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobro(numero) {
    return numero * 2 ;
}

let resultadoDobro = numeroDobro(5);
console.log(resultadoDobro);

//35.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(number1, number2, number3) {
    return (number1 + number2 + number3)/3;
}

let media2 = mediaNumeros(3,7,2);
console.log(media2);

//36.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorDosDoisNumeros(number1, number2) {
    return number1 > number2 ? number1 : number2
}

let doisNumeros = maiorDosDoisNumeros(8,3);
console.log(doisNumeros);

//37.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicadoPorEleMesmo(number) {
    return number * number;
}

let numeroSi = multiplicadoPorEleMesmo(5);
console.log(numeroSi);

// 38.Criar uma função que recebe um valor em metros e retorna o valor convertido em centímetros (Dica: 1 metro = 100 centímetros).
function conversorDeMedidas(valor) {
    return valor * 100;
}

let resultadoConvertido = conversorDeMedidas(4);
console.log(resultadoConvertido);

//39. Criar uma função que recebe um número e retorna a string "Par" se o número for par, ou "Ímpar" se for ímpar (Dica: use o operador de resto %).
function verificarParOuImpar(numero) {
     if (numero % 2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    } 
}

let resultadoParOuImpar = verificarParOuImpar(5);
console.log(resultadoParOuImpar);

//40. Criar uma função que recebe a base e a altura de um retângulo e retorna a sua área ($Area = base \times altura$).
function areaRetangulo(base, altura) {
    return base * altura;
}

let resultadoAreaRetangulo = areaRetangulo(6,3);
console.log(resultadoAreaRetangulo);

//41. Criar uma função que recebe a idade de uma pessoa e retorna true se ela for maior de idade (18 anos ou mais) e false caso contrário.
function idadeMaiorOuMenor(idade) {
    console.log(idade >= 18);    
}

let resultadoIdade = idadeMaiorOuMenor(6);

//42. Criar uma função que recebe a hora atual (apenas o número inteiro, de 0 a 23) e exibe "Bom dia", "Boa tarde" ou "Boa noite" no console.
function saudacaoDia(hora) {
    if (hora < 12) {
        return 'Bom dia';
    } else if (hora > 12) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

let resultadoSaudacao  = saudacaoDia(16);
console.log(resultadoSaudacao);

//43. Criar uma função que recebe um número e retorna uma string dizendo se o número é "Positivo", "Negativo" ou "Zero".
function verificarNumero(numero) {
    if (numero > 0) {
        return 'Positivo'
    } else if (numero < 0) {
        return 'Negativo'
    } else {
        return 'Zero'
    }
}

let resultadoNumero2 = verificarNumero(9);
console.log (resultadoNumero2);

//44.Crie uma função que recebe o peso e a altura. Ela deve calcular o IMC (IMC = peso / (altura * altura)) e retornar uma string:Se o IMC for menor que 18.5: "Abaixo do peso"Se estiver entre 18.5 e 24.9: "Peso normal"Se for 25 ou mais: "Sobrepeso"
function calcularIMC(peso, altura) {
     let IMC = peso/(altura * altura);

    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return 'Peso normal';
    } else {
        return 'Sobrepeso';
    }
}

console.log(calcularIMC(44.8 , 1.55));

//45. Conversor de Temperatura:Crie uma função que recebe uma temperatura em Celsius (C) e retorna a temperatura convertida em Fahrenheit (F).Fórmula: F = (C * 1.8) + 32;

function convertorDeTemperatura(Celsius) {
    return (Celsius * 1.8) + 32;
}

console.log(convertorDeTemperatura(20));

//46. Calculadora de Desconto: Crie uma função que recebe o valor de um produto e a porcentagem de desconto (ex: 10 para 10%). A função deve retornar o novo valor com o desconto aplicado.
//47. Sistema de Notas: Crie uma função que recebe uma nota de 0 a 10 e retorna: "Aprovado" se a nota for 7 ou maior. "Recuperação" se a nota for entre 5 e 6.9. "Reprovado" se a nota for menor que 5. Dica para a questão 46: Para calcular o desconto, você pode fazer: valor - (valor * (desconto / 100)).