@extends('layouts.app')

@section('content')
	
	<h3>Testing ES6</h3>
	<hr>
	
	<button class="btn btn-primary" id="btn-add" name="btn-add">Add New Task</button>
	
	<table class="table table-condensed">
		<thead>
			<tr>
				<th>ID</th>
				<th>Task</th>
				<th>Description</th>
				<th>Date updated</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody id="tasks-list">
			@foreach($tasks as $task)
				<tr id="task{{$task->id}}">
					<td>{{ $task->id }}</td>
					<td>{{ $task->title }}</td>
					<td>{{ $task->description }}</td>
					<td>{{ $task->updated_at }}</td>
					<td>
						<button class="btn btn-warning btn-xs open-modal" value="{{ $task->id }}">Edit</button>
					</td>
					<td>
						<button class="btn btn-danger btn-xs delete-task" value="{{ $task->id }}">Delete</button>
					</td>		
				</tr>			
			@endforeach
		</tbody>
	</table>
		
	@include('tests.modal')
	
@stop

@section('footer.scripts')
	<script src="/js/test.js" ></script>
@stop