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
// The old-n-busted callback way

var response = {};
function length(obj) {
	var l = 0;
	obj.forEach(function(item){
		l++;
	});
	return l;
}

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?

		response[file] = text;
		output(length(response));
		
		if(response.length == 3) {
			output(`${response.file1} - ${response.file2} - ${response.file3}`);	
		}

	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
