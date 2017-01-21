function* gen() {
    console.log('Hello');
    yield;
    console.log('World');
}

var it = gen();   // gen producers iterator, we can use it later

it.next();
setTimeout(function(){
    it.next();
}, 3000);

/****************************************************/
function *main() {
    yield 1;
    yield 2;
    yield 3;  
}

it = main();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next());
console.log(it.next());

console.log(it.next()); // { value: undefined, done: true } 
// implied undefined, as any other function with no return value

/****************** Return **********************************/
function *main2() {
    yield 1;
    // return 'Aha'; // stops the iterator, { value: 'Aha', done: true } 
    yield 2;
    yield 3;  
    return 4;
}

it = main2();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next());
console.log(it.next());

console.log(it.next()); // { value: 4, done: true } 

/****************** For of Loop **********************************/
it = main2();

for( i of it) {
    console.log('iterator: ' + i);
};

/****************** Messages **********************************/
console.log('/************* Messages ***************/');

function coroutine(g) {     // every time it's called it iterator is call passing any arguments and returning any values
    var it = g();
    return function(){
        return it.next.apply(it, arguments);
    };
}

var run = coroutine(function* (){
    var x = 1 + (yield);     // generator is paused till it get external data, could be ajax call
    var y = 1 + (yield);
    yield (x+y);
});

console.log(run());
console.log(run(10));
console.log('Meaning of life: ' + run(30).value);


//function* test(data) {
    // yield data;
// }
// it = test('Some text');
// console.log(it.next());

console.log('/************* getData ***************/');

function getData(d) {
    setTimeout(function() {
        run(d);
    }, 1000);
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























