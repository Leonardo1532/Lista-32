// Caso fique em dúvida durante a resolução do exercício, procurar pelas funções:
// arrays - foreach, filter, find, splice / string - split, length, charAt, match
// Pesquisar sobre essas funções pode ser um ponto de partida, não necessariamente elas
// são a solução dos desafios.
// 1. Faça uma função PalavraMaisLonga(frase) pegue o parâmetro “frase” que está
// sendo passado e retorne a palavra mais longa na string. Se houver duas ou mais
// palavras com o mesmo tamanho, retorne a primeira palavra da string com esse
// tamanho. Deve ignorar pontuação e caracteres especiais (!?-.#$, etc). As palavras
// podem conter números, por exemplo “Ola palavra123 831”.
// Exemplo: entrada: “estudar&! diversao” entrada: “eu adoro pizza”
// saída: “diversao” saída: “adoro”
function PalavraMaisLonga(frase) {
    var palavras = frase.split(" ");
    var maiorPalavra = 0;
    for (var index = 0; index < palavras.length; index++) {
        if (palavras[index].length > maiorPalavra) {
            maiorPalavra = palavras[index].length;
        }
    }
    for (var index = 0; index < palavras.length; index++) {
        if (palavras[index].length >= maiorPalavra) {
            var palavraErrada = palavras[index];
            var palavraCerta = palavraErrada.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
            return palavraCerta;
        }
    }
}
// 2. Faça uma função ValidarNomeDeUsuario(nome) use o parâmetro “nome” que é
// passado e verifique se é um nome de usuário válido de acordo com as regras:
// a. O nome de usuário tem entre 4 e 25 caracteres;
// b. Deve obrigatoriamente começar com uma letra;
// c. Só deve conter letras, número e undeline ( _ );
// d. O nome não pode ter o último caractere como underline( _ ).
// Se o nome de usuário for válido deve retornar true, e se for inválido deve retornar
// false. Exemplo: entrada: “Dev_brabo” entrada: “_SeniorDev2”
// saída: true saída: false
function ValidarNomeDeUsuario(nome) {
    var valido = true;
    if (nome.length < 4 || nome.length > 25) {
        alert("Nome inserido inválido devido a quantidade de caracteres");
        valido = false;
    }
    else if (nome.charAt(0) == "0" || nome.charAt(0) == "1" || nome.charAt(0) == "2" || nome.charAt(0) == "3" || nome.charAt(0) == "4" || nome.charAt(0) == "5" || nome.charAt(0) == "6" || nome.charAt(0) == "7" || nome.charAt(0) == "8" || nome.charAt(0) == "9") {
        alert("O nome precisa começar com uma letra!");
        valido = false;
    }
    else if (nome.charAt(nome.length - 1) == "_") {
        alert("O ultimo caractere não pode ser um underline");
        valido = false;
    }
    nome.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    if (valido == true) {
        return true;
    }
    else {
        return false;
    }
}
// 3. Faça uma função ElementosEmComum(arrayString) leia o array de strings passado
// como parâmetro “arrayString” que deve conter dois elementos: o primeiro
// representa uma lista de número separados por vírgula e estão em ordem crescente,
// o segundo elemento representa uma outra lista de números também separados por
// vírgula e ordenados. A função deve retornar uma string com os números que se
// repetem em ambos os elementos de arrayString. Se não houver valores repetidos,
// retorne “false” como uma string.
// Exemplo: entrada: [“2, 4, 5, 8, 14”, “2, 3, 5, 14, 16”]
// saída: “2, 5, 14”
var palavras = [];
var palavras2 = [];
var arrayRepetidos = [];
function ElementosEmComum(arrayString) {
    palavras = arrayString[0].split(",");
    palavras2 = arrayString[1].split(",");
    console.log(palavras);
    console.log(palavras2);
    for (var index2 = 0; index2 < palavras.length; index2++) {
        for (var index = 0; index < palavras2.length; index++) {
            if (palavras[index2] == palavras2[index]) {
                arrayRepetidos.push(palavras[index2]);
            }
        }
    }
    var concatenar = ("");
    for (var index = 0; index < arrayRepetidos.length; index++) {
        if (index == 0) {
            concatenar = arrayRepetidos[index];
        }
        else {
            concatenar = concatenar + "," + arrayRepetidos[index];
        }
    }
    if (arrayRepetidos.length == 0) {
        return "false";
    }
    else {
        return concatenar;
    }
}
