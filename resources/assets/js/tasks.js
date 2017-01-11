// @project Tasks 

import { setAjaxEventHandlers } from './ajax.js';

// Application initiation: setting all required handlers
function setEventHandlers() {	

	setAjaxEventHandlers();
	
}

// 
$("document").ready(function() {	
	setEventHandlers();
});