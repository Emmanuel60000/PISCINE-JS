// Créer une fonction delay qui prend en paramètre une fonction et un délai en millisecondes. La fonction doit appeler la fonction passée en paramètre après le délai spécifié.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  console.log('Hello');
  sleep(2000).then(() => { console.log('World!'); });
