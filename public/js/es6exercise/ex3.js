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
    return text;
}

// **************************************

function error() {
    output('ERROR caught');
}

// Option 1. 
// function getFile(filename) {
	// return new Promise(function executor(resolve, reject) {
        // fakeAjax(filename, resolve);           
    // });
// }

// Option 2. Absolutly the same
function getFile(filename) {
	return new Promise(function executor(resolve, reject) {
        fakeAjax(filename, function(text){
            resolve(text);
        });           
    });
}	

var p1 = getFile('file1');		
var p2 = getFile('file2');		
var p3 = getFile('file3');		
var p4 = getFile('file4');

p1
.then(output)
.then(function(text) {   // as output provides text we can pass it as parameter
    output('#' + text);
    return p2;
})
.then(output)
// .catch(..) 
//// .catch can be placed any where in the chain to resolve error, 
//// its return value is passed to the next chain element as callback function argument
.then(function(){
    // dosomestuff();
    return p3;
})
.then(output)
.then(function(){
    output('Completed');
})
.catch(function(err) {
    error(err);
});

//functionally equivalent to catch
// .then(
    // null, 
    // function(err){
        // error(err); //do stuff
    // }
// );

