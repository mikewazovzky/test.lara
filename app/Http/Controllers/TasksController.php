<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TasksController extends Controller
{
    public function index()
	{
		$tasks = Task::all();
		
		return view('tasks.index', ['tasks' => $tasks]);
	}    
	
	public function show(Task $task)
	{
		return response()->json($task);
	}
	
	public function store(Request $request)
	{
		$task = Task::create($request->all());
		
		return response()->json($task);
	}
	
	public function update(Request $request, Task $task)
	{
		$task->update($request->all());
		
		return response()->json($task);
	}
	
	public function destroy(Task $task)
	{
		return response()->json($task->delete());
	}
	
}
