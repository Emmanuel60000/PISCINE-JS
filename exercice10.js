// Exercice 10: Exécuter des promesses en série
let promise1 = new Promise((resolve, reject) => {
    resolve("Hello! ");
});
 
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("World");
    }, 1000);
});
 
promise1.then((result1) => {
    console.log(result1);
    return promise2;
}).then((result2) => {
    console.log(result2);
});