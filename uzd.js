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

function bmi(svoris , ugis){
    return svoris / (ugis*ugis)
};

let ugis = 190/100;
let svoris = 90;
let bmiA = bmi(svoris, ugis);

console.log('jusu BMI:' , bmiA );

console.log("----------4-----------");
console.log();

let amz = 20;

let skai = [
    amz*365*24*60*60,
    amz*365*24*60,
    amz*365*24,
    amz*365
];

console.log('Amzius metais:', amz);
console.log('Amzius sek.:', skai[0]);
console.log('Amzius min.:', skai[1]);
console.log('Amzius val.:', skai[2]);
console.log('Amzius dienomis;', skai[3]);

console.log("----------5-----------");
console.log();

