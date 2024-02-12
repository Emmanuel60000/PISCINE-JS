// Exercice 10: Calculer la factorielle d'un nombre
var factorielle = function(n) {
  var resultat = 1;
  for (var i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
};
var nombre = 5; 
console.log("La factorielle de", nombre, "est", factorielle(nombre));