// Exercice 3: Filtrer les nombres pairs d'un tableau

let tableau = [5, 10, 15, 20, 25, 30, 35];

let nombresPairs = tableau.filter(function(nombre) {
    return nombre % 2 === 0;
});

console.log("Les nombres pairs dans le tableau sont : " + nombresPairs);
