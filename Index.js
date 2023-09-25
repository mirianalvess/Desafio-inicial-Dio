//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de 
//decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let heroi = "Mirian";
let XP = 6500;

if(XP <= 1000){
    console.log("O herói de nome " + heroi + " está no nível Ferro");
} else if(XP > 1001 && XP <= 2000){
    console.log("O herói de nome " + heroi + " está no nível Bronze");
} else if(XP > 2001 && XP <= 5000){
    console.log("O herói de nome " + heroi + " está no nível Prata");
} else if(XP > 5001 && XP <= 7000){
    console.log("O herói de nome " + heroi + " está no nível Ouro");
} else if(XP > 7001 && XP <= 8000){
    console.log("O herói de nome " + heroi + " está no nível Platina");
} else if(XP > 8001 && XP <= 9000){
    console.log("O herói de nome " + heroi + " está no nível de Ascendente");
} else if(XP > 9001 && XP <= 10000){
    console.log("O herói de nome " + heroi + " está no nível de Imortal");
} else if(XP > 10001){
    console.log("O herói de nome " + heroi + " está no nível de Radiante");
} 
