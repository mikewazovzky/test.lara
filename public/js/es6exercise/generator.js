// generator example
function* gen(arr) {
    for (index = 0; index < arr.length; index++) {
        yield arr[index];
    }    
}

//let iterator = gen([1,2,3,4,5]);
let iterator = gen(['id','title','descr']);

//console.log(iterator.next());

for (let i of iterator) console.log(i);
console.log('--------------------------------------');


let task = {
    id: 42,
    title: 'Task',
    descr: 'Just do something'
};

function* entries(obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
   }
}

iterator = entries(task);
for (let i of iterator) console.log(i);
console.log('--------------------------------------');

for (let [key, value] of entries(task)) {
   // do something with key|value
   console.log('key:' + key + ', value: ' + value);
}
