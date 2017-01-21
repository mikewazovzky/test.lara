function getData(d) {
    setTimeout(function() {
        return d;
    }, 1000);
}

async function foo() {
    await getData(100);
    console.log('Completed.');
}



