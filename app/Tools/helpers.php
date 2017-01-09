<?php

use App\Flyer;
use App\Tools\Country;
use App\Tools\Url;

/**
 * Flash message to the session
 * 
 * @param string|null $title
 * @param string|null $message 
 * @return App\Tools\Flash 
 */
function flash($title = null, $message = null)
{	
	$flash = app('App\Tools\Flash');
	
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

function country($code)
{
	return Country::name($code);
}

function filtered_url(array $exceptions, array $with)
{
	return (new Url)->except($exceptions)->with($with)->get();
}