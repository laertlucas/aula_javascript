/*var nome = "Lucas Laert";
var idade = 23;
var idade2 = 20;
var frase = "Eu sou o melhor!";
alert("Bem vindo " + nome + " sua idade é " + idade);
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
var list = ["Boné", "Blusa", "Short", "Chinelo"];
//list.push("Short");
//list.pop("Boné")
console.log(list.length);
console.log(list.toString);
console.log(list.join(" - "));*/

function clicou(){
    document.getElementById("agrads").innerHTML = "Obrigado por clicar!";
}

function redirect(){
    window.open("https://www.linkedin.com/notifications/");
    //window.location.href = "https://www.linkedin.com/notifications/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passar o mouse aqui!";
}