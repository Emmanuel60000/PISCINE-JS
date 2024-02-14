// Exercice 3: Filtrage avec des expressions régulières

const clean = text => text.replace(/[^a-zA-Z0-9 ]/g, "");
const products = [{ name: "Men's Shirts" }];

const getProducts = filterkeyword => {
  const pattern = new RegExp('\\b' + clean(filterkeyword), 'i');
  return products.filter(x => pattern.test(clean(x.name)));
}

console.log(getProducts("men's")[0]?.name);
console.log(getProducts("mens")[0]?.name);
console.log(getProducts("men🐱‍🐉s")[0]?.name);
console.log(getProducts("shoes")[0]?.name);
console.log(getProducts("shirts")[0]?.name);