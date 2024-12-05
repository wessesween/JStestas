console.log("----------1-----------");
console.log();

let eur = Math.floor(Math.random()*1000)+1;

function eurtodol(eur){
    let kof = 1.05;
    return eur * kof;
};

let dol = eurtodol(eur);

console.log("euru suma:" , eur , "eur");
console.log("doleriais:" , dol , "usd");

console.log("----------2-----------");
console.log();

let doL = Math.floor(Math.random()*1000)+1;

function doltoeur(doL){
    let kof = 0.95;
    return  doL * kof;
};

let euR = doltoeur(doL);

console.log("usd suma:" , doL, "usd");
console.log("eurais:" , euR , "eur");

console.log("----------3-----------");
console.log();

let ugis = 190;
let svoris = 90;
