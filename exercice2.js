// Exercice 1: Trouver le plus grand nombre dans un tableau

let tableau = [25, 10, 45, 30, 15];

let plusGrandNombre = tableau[0]; 

for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > plusGrandNombre) {
        plusGrandNombre = tableau[i];
    }
}
console.log("Le plus grand nombre dans le tableau est : " + plusGrandNombre);
