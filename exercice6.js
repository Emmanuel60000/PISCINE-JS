// Exercice 6: Filtrer un tableau d'objets par une plage de dates
const objets = [
    { id: 1, date: new Date('2024-02-01') },
    { id: 2, date: new Date('2024-02-05') },
    { id: 3, date: new Date('2024-02-10') },
    { id: 4, date: new Date('2024-02-15') },
    { id: 5, date: new Date('2024-02-20') },
    { id: 6, date: new Date('2024-02-25') },
    { id: 7, date: new Date('2024-03-01') },
  ];
            
function filterByDate(tableau, date1, date2) {  

    return tableau.filter(element => element.date >= date1 && element.date <= date2);
}   


let tableauFiltré = filterByDate(objets, new Date('2024-02-01'), new Date('2024-02-25'));

console.log(tableauFiltré);
    