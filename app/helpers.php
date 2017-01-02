<?php

use App\Flyer;

/**
 * Flash message to the session
 * 
 * @param string|null $title
 * @param string|null $message 
 * @return App\Http\Flash 
 */
function flash($title = null, $message = null)
{	
	$flash = app('App\Http\Flash');
	
	if( func_num_args() == 0) {		
		return $flash;
	}
	
	return $flash->info($title, $message);
}

/**
 * The path (redirects to) a given flyer
 * 
 * @param App\Flyer $flyer
 * @return string (url)
 */
function flyer_path(Flyer $flyer)
{
    return $flyer->zip . '/' . str_replace(' ', '-', $flyer->street);
}