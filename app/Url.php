<?php

namespace App;

use Illuminate\Http\Request;

class Url
{
	protected $exceptions;
	protected $with;
	
	public function __construct($exceptions = [], $with = [])
	{
		$this->exceptions = $exceptions;
		$this->with = $with;	
	}
	
	public function get()
	{
		$input = request()->except($this->exceptions);
		$input = array_merge($input, $this->with);
		
		$url = request()->url();
		
		$count = 0;	
		foreach($input as $key => $value) {
			if($count++ == 0) {
				$url .= '/?';
			} else {
				$url .= '&';
			}
			$url .= "{$key}={$value}";
		}	
		
		return $url;
	}
	
	public function except($exceptions)
	{
		$this->exceptions = $exceptions;
		return $this;
	}
	
	public function with($with) 
	{
		$this->with = $with;
		
		return $this;
	}
	
}