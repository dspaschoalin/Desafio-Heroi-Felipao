console.log("Classificador de Herói")
let nickname = "Squalidus"
let point = 6035;
let experience;
console.log("Jogador: " + nickname)
console.log("Experiência: " + point)
const nome = "O Herói de nome "
const nivel= " está no nível de "
if(point<1000){
   console.log(nome + nickname + nivel + "Ferro")}
else if(point >=1000 && point< 2000){
   console.log(nome + nickname + nivel + "Bronze")}
else if(point >=2000 && point< 5000){
   console.log(nome + nickname + nivel + "Prata")}
else if(point >=6000 && point< 7000){
   console.log(nome + nickname + nivel + "Ouro")}
   else if(point >=7000 && point< 8000){
    console.log(nome + nickname + nivel + "Platina")}
    else if(point >=8000 && point<9000){
    console.log(nome + nickname + nivel + "Ascendente")}
    else if(point >=9000 && point<10000){
    console.log(nome + nickname + nivel + "Imortal")}
    else if(point >=10000){
    console.log(nome + nickname + nivel + "Radiante")}
