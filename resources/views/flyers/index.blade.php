@extends('layouts.app')

@section('content')	

	<h1>List of Flyers</h1>
	<hr>
	
	@foreach($flyers as $flyer)
		<section>
			<h3>
				{{ $flyer->city }} 
				<strong><a href="">[{{ $flyer->country }}]</a></strong>
				<a href="{{ flyer_path($flyer)}}">{{ $flyer->street }}</a> 
				<span class="created-by">created by <a href="">{{ $flyer->user->name }}</a><span>
			</h3>
			
			<p>{{ substr($flyer->description, 0, 250) . '...' }}</p>
			
		</section>
	@endforeach
	
	<div class="div-center">
		{{ $flyers->links() }}
	</div>
	
@stop

