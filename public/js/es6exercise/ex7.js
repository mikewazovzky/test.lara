function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return new Promise (function(){
		fakeAjax(file,function(text) {
            run(text)
        });
	});
}

function coroutine(g) {     // every time it's called it iterator is call passing any arguments and returning any values
    var it = g();
    return function(){
        return it.next.apply(it, arguments);
    };
}

var run = coroutine(function* (){

    var p1 = getFile("file1");
    var p2 = getFile("file2");
    var p3 = getFile("file3");
    
    var text1 = (yield p1);
    output(text1);
    output(p1);
    
    var text2 = (yield p2);
    output(text2);
    
    var text3 = (yield p3);
    output(text3);
    
    output('Completed!');    
});

run();
output('Finish!');    



