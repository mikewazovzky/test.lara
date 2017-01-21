// Promis.all API. Promis  "Gate"

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

function error(text = "Error!") {
	output(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

var p = [];
p.push(getFile("file1"));
p.push(getFile("file2"));
p.push(getFile("file3"));
// p.push(getFile("file4"));

Promise.all(p)
.then( function(results) {
    //console.log(p); 
    results.forEach(output);    
})
.catch(error)
.then(function() {
    output('Completed!');
})
// .catch(error) // не работает :(
;
