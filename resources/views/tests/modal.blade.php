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