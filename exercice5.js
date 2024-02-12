// Exercice 5: Compter les occurrences d'une lettre dans une chaîne

let chaine = "Je suis une chaine de caractères j";

// Utilisation de /[a]/gi pour compter toutes les occurrences de 'a' 
let resultat = chaine.match(/[j]/gi);


console.log(resultat.length);
