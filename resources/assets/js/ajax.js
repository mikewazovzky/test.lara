/********************** Module Ajax: Tasks Index Page ********************/
"use strict"; // see strict mode

var url = "/tasks";
// var count = 0; // debug: controls the number of deleteTask() calls;

// Display modal form for editing Task
function openModalEdit(obj) {
	
	var task_id = $(obj).val()
	var ajax_url = url + '/' + task_id;
	
	$.get(ajax_url, function (data) {
		// console.log(data);
		$('#task_id').val(data.id);
		$('#task').val(data.title);
		$('#description').val(data.description);
		$('#btn-save').val("update");

		$('#myModal').modal('show');
	}); 
}

// Display modal form for creating new Task
function openModalCreate() {
	$('#btn-save').val("add");
	$('#frmTasks').trigger("reset");
	$('#myModal').modal('show');		
}

// Add CSRF token to ajax call header
function ajaxSetup() {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});	
}

// Remove task from the list on html page
function removeTask(task_id) {
	$("#task" + task_id).remove();
}
	
// Delete task from database (ajax call) and [in case of success] remove it from list on html page
function deleteTask(obj) {
	//console.log('Delete: ' + count++);
	
	var task_id = $(obj).val();
	var ajax_url = url + '/' + task_id;
	
	ajaxSetup();			

	$.ajax({
		type: "DELETE",
		url: ajax_url,

		success: function (data) {
			removeTask(task_id);
		},
		
		error: function (data) {
			console.log('Error:', data);
		}
	});		
}

// Create new task object 
function createTask(data) {
	
	// construct <tr> and populate it with task data
	var task = $('<tr id="task' + data.id +'"></tr>');
	task.append('<td>' + data.id + '</td>');
	task.append('<td>' + data.title + '</td>');
	task.append('<td>' + data.description + '</td>');
	task.append('<td>' + data.created_at + '</td>');
	
	// create Edit <button>
	var td_edit = $('<td></td>');
	var btn_edit = $('<button class="btn btn-warning btn-xs open-modal" value="' + data.id + '">Edit</button></td>');
			
	/* Investigate event setting/handling via jQuery .on() finction */
	// Set event handler for edit button
	// $("#tasks-list").on( "click", ".open-modal[value=" + data.id + "]", function() {
	//	openModalEdit(this);			
	//});
	
	// add Edit <button> to the task
	td_edit.append(btn_edit);
	task.append(td_edit);
	
	// create Delete <button>
	var td_delete = $('<td></td>');
	var btn_delete = $('<button class="btn btn-danger btn-xs delete-task" value="' + data.id + '">Delete</button>');
	
	// Set event handler for delete button
	//$( "#tasks-list").on( "click", ".delete-task[value=" + data.id + "]", function() {
	//	deleteTask(this);
	//});		
	
	// add Delete <button> to the task
	td_delete.append(btn_delete);
	task.append(td_delete);

	return task;
}	

// Populate task [new or edited] data with Modal form inputs and save it
function saveTask() {
	
	ajaxSetup();

	// fill task data
	var task_id = $('#task_id').val();
	
	var formData = {
		title: $('#task').val(),
		description: $('#description').val(),
	};
	
	// used to determine the http verb to use [add=POST], [update=PUT]
	var state = $('#btn-save').val();

	// params for ajax POST request to create new Task
	var type = "POST"; 
	var ajax_url = url;

	// params for ajax PUT request to update existing Task
	if (state == "update"){
		type = "PUT"; 
		ajax_url += '/' + task_id;
	}

	$.ajax({
		type:     type,
		url:      ajax_url,
		data: 	  formData,
		dataType: 'json',
		success:  function (data) {
			var task = createTask(data);
			
			// if new task created	
			if (state == "add"){ 
				$('#tasks-list').append(task);

			// if existing task updated	
			} else { 
				$("#task" + task_id).replaceWith(task);
			}
			
			// Set Edit <button> handler 
			$('.open-modal[value=' + data.id + ']').click(function(){
				openModalEdit(this);
			});
			
			// Set Delete <button> handler
			$('.delete-task[value=' + data.id + ']').click(function(){
				deleteTask(this);
			});

			$('#frmTasks').trigger("reset");
			$('#myModal').modal('hide')
		},
		
		error: function (data) {
			console.log('Error:', data);
		}
	});		
}
	
		
// Set Ajax Module event handlers
function setAjaxEventHandlers(){	

	// Display modal form for editing Task
	$('.open-modal').click(function(){
		openModalEdit(this);
	});

	// Display modal form for creating new Task
	$('#btn-add').click(function(){
		openModalCreate();
	});

	// Delete task from database (ajax call) and remove it from list (html)
	$('.delete-task').click(function(){
		deleteTask(this);
	});

	// Create new / update existing Task
	$("#btn-save").click(function (e) {
		e.preventDefault();
		saveTask();
	});
}

export { setAjaxEventHandlers };
	