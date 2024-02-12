// Exercice 9: Calculer l'âge à partir d'une date de naissance

let dateNaissance = new Date(1996, 10, 10);

let dateActuelle = new Date();
let differenceEnMillisec = dateActuelle - dateNaissance;

let ageEnAnnees = Math.floor(differenceEnMillisec / (365.25 * 24 * 60 * 60 * 1000));

console.log(ageEnAnnees);
