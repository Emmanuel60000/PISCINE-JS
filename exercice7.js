// Exercice 7: Vérifier si un mot est un palindrome

let mot = "radar";

let motEnMinuscules = mot.toLowerCase();

// mot inverser
let motInverse = motEnMinuscules.split('').reverse().join('');

let estPalindrome = motEnMinuscules === motInverse;

console.log(`Le mot "${mot}" est un palindrome : ${estPalindrome}`);
