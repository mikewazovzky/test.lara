<?php

namespace App\Http\Controllers;

use App\Task;

class TestController extends Controller
{
    public function test()
	{		
		$tasks = Task::all();
		
		return view('tests.test', ['tasks' => $tasks]);
	}    
	
	public function es6()
	{		
		return view('tests.es6');
	}
}
