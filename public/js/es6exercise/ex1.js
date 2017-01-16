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



function getFile(file) {
	fakeAjax(file,function(text){
        process(file, text);
    });
}

var response = {};

function process(filename, content){
    response[filename] = content;
    
    console.log(response); 
    console.log(Object.keys(response).length);
    
    if (Object.keys(response).length == 3) {
        console.log(`${response.file1} -> ${response.file2} -> ${response.file3}`); 
        
        for (var key in response) {
            console.log(key + ': ' + response[key]);
        }
        
        console.log(Object.keys(response));  
        console.log(Object.values(response));       
    }
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");