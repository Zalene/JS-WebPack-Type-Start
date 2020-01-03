const name = "jean";
const age = 18;
const hobbies = null;
let action;
let sym = Symbol();
let actif = true;

const cities = {
  name: "Paris",
  state: "France"
};

cities.name = "Londre";

console.log(typeof name);
console.log(typeof age);
console.log(typeof hobbies);
console.log(typeof action);
console.log(typeof sym);
console.log(typeof actif);

console.log(cities);

const firstname = "Bastien";

if (firstname) {
  console.log('Bonjour ' + firstname );
} else {
  console.log('Aurevoir !')
}

const ages = 20;
const isMajor = ages >= 18 ? true : false;
console.log(isMajor);

const roues = 1;
let vehiculeType;

switch (roues) {
  case 2 :
    vehiculeType = "Moto";
    break;
  case 4 :
    vehiculeType = "Voiture";
    break;
  default :
    vehiculeType = "Camion";
    break;
}

console.log(vehiculeType);

for (let i = 0; i < 5; i++) {
  console.log(i); 
}

let c = 0;
while (c < 10) {
  console.log(c);
  c++;
}

console.log(parseInt("15dada16"));