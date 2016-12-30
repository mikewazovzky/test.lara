<?php

namespace App\Http;

class Flash
{
	/**
	 * API
	 * flash->message('Hello There')
	 * flash->error()
	 * flash->success()
	 * flash->overlay()
	 * flash->aside()
	 */
	 
	/**
     * Create a flash message
     *
	 * @param  string	   $title
	 * @param  string	   $message	 
	 * @param  string  	   $level	 
	 * @param  string|null $key	 
     * @return void
     */
	public function message($title, $message, $level, $key = 'flash_message') 
	{
		session()->flash($key, [
			'title'   => $title,
			'message' => $message,
			'level'	  => $level
		]);
	}
	
	/**
     * Create an information flash message
     *
	 * @param  string	   $title
	 * @param  string	   $message	 
     * @return void
     */		 
	public function info($title, $message) 
	{
		$this->message($title, $message, 'info');
	}	
	
	/**
     * Create a success flash message
     *
	 * @param  string	   $title
	 * @param  string	   $message	 
     * @return void
     */		 
	public function success($title, $message) 
	{
		$this->message($title, $message, 'success');
	}	 

	/**
     * Create an error flash message
     *
	 * @param  string	   $title
	 * @param  string	   $message	 
     * @return void
     */		
	public function error($title, $message) 
	{
		$this->message($title, $message, 'error');
	}	

	/**
     * Create an overlay flash message
     *
	 * @param  string	   $title
	 * @param  string	   $message	 
	 * @param  string|null $level	 
     * @return void
     */			
	public function overlay($title, $message, $level = 'success') 
	{
		$this->message($title, $message, $level, 'flash_message_overlay');
	}	 
}