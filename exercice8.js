// Exercice 8: Trier un tableau d'objets par plusieurs propriétés

const arr = [
    { name: 'Nicolas', age: 20 },
    { name: 'Lea', age: 30 },
    { name: 'Maxime', age: 20 },
    { name: 'Eddy', age: 30 },
  ];
  arr.sort((a, b) => {
    
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    
    return 0;
  });
  console.log(arr);


    
