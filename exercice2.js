// Exercice 2: Gérer les erreurs avec try...catch
try {
    throw new TypeError("oops");
  } catch ({ name, message }) {
    console.log(name); 
    console.log(message); 
  }