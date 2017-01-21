// Promis.race API. 

function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url + "(delay: " + randomDelay + ")");

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

function success(text = "Success!") {
	output(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

var p = getFile("file1");

Promise.race([
    p,
    new Promise(function(_, reject){    // time bomb
        setTimeout(function(){          // _ is just a variable (argument) name, never used in this case
            reject('Timeout!!');
        }, 3000);
    })
])
.then(
    success, 
    error
);
