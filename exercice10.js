// Exercice 10: Convertir une chaîne de caractères en camelCas
function convertToCamelCase(chaine) {
    return chaine.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase());
}

// Exemple d'utilisation
let chaineOriginale = "je-deteste-lea";
let chaineCamelCase = convertToCamelCase(chaineOriginale);

console.log(chaineCamelCase);


