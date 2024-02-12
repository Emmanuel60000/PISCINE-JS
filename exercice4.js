// Exercice 4: Trouver un élément dans un tableau d'objets

let tableau = [
    {
        nom: "Jean",
        prenom: "Michel"
    },
    {
        nom: "Pierre",
        prenom: "Jean"
    },
    {
        nom: "Marie",
        prenom: "Jean"
    }
];

let resultat = tableau.find(function(element) {
    return element.nom === "Jean";
}); 

console.log(resultat);
