// Exercice 6: Trier un tableau de nombres  
let tableau = [11, 22, 33, 14, 95, 56, 75, 8, 9, 10];

let resultat = tableau.sort(function(a, b) {
    return a - b;
});

console.log(resultat);
                