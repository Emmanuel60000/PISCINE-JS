// Exercice 1: Supprimer les éléments falsy d'un tableau

function supprimerFalsyElements(tableau) {
    return tableau.filter(element => element);
}

let tableauOriginal = [0, 1, "", "texte", null, undefined, NaN, false, true];

let tableauSansFalsy = supprimerFalsyElements(tableauOriginal);

console.log(tableauSansFalsy);
        