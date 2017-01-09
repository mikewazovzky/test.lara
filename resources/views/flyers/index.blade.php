@extends('layouts.app')

@section('content')	

	<h1>List of Flyers</h1>
	<hr>
	
	@foreach($flyers as $flyer)
		<section>
			<h3>
				{{ $flyer->city }} 
				<strong><a href="
					{{ (new App\Url)->except(['page'])->with(['country' => $flyer->country])->get() }}
				">[{{ $flyer->country }}]</a></strong>
				<a href="{{ flyer_path($flyer)}}">{{ $flyer->street }}</a> 
				<span class="created-by">created by <a href="
					{{ (new App\Url)->except(['page'])->with(['name' => $flyer->user->name ])->get() }}
				">{{ $flyer->user->name }}</a><span>
			</h3>
			
			<p>{{ substr($flyer->description, 0, 250) . '...' }}</p>
			
		</section>
	@endforeach
	
	<div class="div-center">
		{{ $flyers->appends(Request::except('page'))->links() }}
	</div>
	
@stop

