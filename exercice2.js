// Exercice 2: Regrouper des éléments d'un tableau par propriété

var personnes = [
    { nom: 'Maxime', age: 25, ville: 'Paris' },
    { nom: 'Lea', age: 30, ville: 'Paris' },
    { nom: 'Nicolas', age: 25, ville: 'Lyon' }
];

function groupByProperty(tableau, property) {
    return tableau.reduce(function (acc, obj) {//La méthode reduce est utilisée pour parcourir chaque élément du tableau et accumuler les résultats dans un objet acc.
     
        var key = obj[property];//On récupère la valeur de la propriété de l'objet obj

        if (!acc[key]) {//Si la propriété n'existe pas, on crée un nouvelle objet
            acc[key] = [];
        }
        acc[key].push(obj);//On ajoute l'objet obj à la propriété de l'objet acc
        return acc;
    }, {});
}



var personnesParAge = groupByProperty(personnes, 'age');
console.log('Personnes par âge:', personnesParAge);


var personnesParVille = groupByProperty(personnes, 'ville');
console.log('Personnes par ville:', personnesParVille);
