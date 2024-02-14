// Exercice 4: Création d'une fonction de debounce

search.addEventListener('keyup', function(e){
function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}350})