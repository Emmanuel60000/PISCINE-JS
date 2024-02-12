// Exercice 5: Compter les occurrences d'une lettre dans une chaîne

let chaine = "Je suis une chaine de caractères j";

// Utiliser /[a]/gi pour compter toutes les occurrences de 'a' (insensible à la casse)
let resultat = chaine.match(/[j]/gi);


console.log(resultat.length);
