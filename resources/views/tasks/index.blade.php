@extends('layouts.app')

@section('content')

	<h2>List of Tasks</h2>
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
	
	<!-- Modal (Pop up when edit button clicked) -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">?</span></button>
					<h4 class="modal-title" id="myModalLabel">Task Editor</h4>
				</div>
				
				<div class="modal-body">
					
					<form id="frmTasks" name="frmTasks" class="form-horizontal" novalidate="">

						<div class="form-group error">
							<label for="inputTask" class="col-sm-3 control-label">Task</label>
							<div class="col-sm-9">
								<input type="text" class="form-control has-error" id="task" name="task" placeholder="Task" value="">
							</div>
						</div>

						<div class="form-group">
							<label for="description" class="col-sm-3 control-label">Description</label>
							<div class="col-sm-9">
								<input type="text" class="form-control" id="description" name="description" placeholder="Description" value="">
							</div>
						</div>
					
					</form>
				
				</div>
				
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="btn-save" value="add">Save changes</button>
					<input type="hidden" id="task_id" name="task_id" value="0">
				</div>
				
			</div>
		</div>
	</div>	
	<!-- End of Modal -->
	
	<meta name="_token" content="{!! csrf_token() !!}" />
	
@stop

@section('footer.scripts')
	<script src="/js/ajax.js"></script>
@stop
