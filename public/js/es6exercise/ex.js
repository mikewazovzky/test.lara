function coroutine(g) {     // every time it's called it iterator is call passing any arguments and returning any values
    var it = g();
    return function(){
        return it.next.apply(it, arguments);
    };
}


function getData(d) {
    return new Promise(function(resolve) {
        setTimeout(function(d) {
            resolve(d);
        }, 1000);
    });
}

var run = coroutine(function* (){
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = (yield getData(
        "Meaning of life: " + (x + y))
    );
    console.log(answer);    
});

run();






















