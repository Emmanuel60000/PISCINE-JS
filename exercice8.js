// Exercice 8: Fusionner deux tableaux et supprimer les doublons

let tableau1 = [11, 22, 33, 14, 95, 56, 75, 8, 9, 10];
let tableau2 = [1, 2, 3, 14, 95, 56, 75, 8, 9, 10];

let resultat = tableau1.concat(tableau2.filter(item => !tableau1.includes(item)));

console.log(resultat);


    