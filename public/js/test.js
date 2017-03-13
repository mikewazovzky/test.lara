function errorFn(jqXHR, textStatus, errorThrown) {
	
	var msg = '';
		
	if (jqXHR.status === 0) {
		msg = 'Not connected.\n Verify Network.';
	} else if (jqXHR.status == 404) {
		msg = 'Requested page not found. [404]';
	} else if (jqXHR.status == 500) {
		msg = 'Internal Server Error [500].';
	} else if (textStatus === 'parsererror') {
		msg = 'Requested JSON parse failed.';
	} else if (textStatus === 'timeout') {
		msg = 'Time out error.';
	} else if (textStatus === 'abort') {
		msg = 'Ajax request aborted.';
	} else {
		msg = 'Uncaught Error.\n' + jqXHR.responseText;
	}

	console.log("Error: ", msg);
}


class Task {
	constructor(id = 0, title = '', description = '') {
		this.id = id;
		this.title = title;
		this.description = description;
	}
	
	log() {
		console.log(this);
	}
	
	getData(test) {
		$.get('/tasks/47', function(data) {
			this.id = data.id;
			this.title = data.title;
			this.description = data.description;
			test;
		});
	};
}		






$("document").ready(function() {	
/******************************* Excecution starts here ************************************************/

$('#btn-add').click(function(){
	// alert('Create button pressed');
	var task = new Task();
	task.getData(task.log);
});


let myPromise =  new Promise(function(resolve, reject) {
	$.ajax({
		url: '/tasks/47',
		type: 'get',
		dataType: 'json',
		success: resolve,
		error: reject
	});
});
		
myPromise.then(function(value) {
	console.log(value); // "Success!"
	throw 'Ups...';
  
}, errorFn).catch(function(e) {
	console.log(e); // "Ups..."
	
}).then(function(){
	console.log('after a catch the chain is restored');
	
}, function () {
	console.log('Not fired due to the catch');
});
	
/*********************************************************************************************/
});
