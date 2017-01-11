@inject('countries', 'App\Tools\Country')
@extends('layouts.app')

@section('content')	

	{{ var_dump(Request::all()) }}
	
	<h1>List of Flyers</h1>
	<hr>
	
	<form class="form-inline" method="GET" action="/flyers">
			Filter: 
			<div class="form-group">
				<label for="country">Country:</label>
				<select name="country" id="country" class="form-control input-sm" style="width: 15em;" >
					<option value="">Select Country</option>
				
					@foreach($countries::all() as $country => $code)
						<option value="{{ $code }}">{{ $country }}</option>
					@endforeach
					
				</select>
			</div>
			
			<div class="form-group">
				<label for="name">User:</label>
				<select name="name" id="name" class="form-control input-sm" style="width: 15em;">
					<option value="">Select User</option>
					
					@foreach(App\User::all() as $user)
						<option value="{{ $user->name }}">{{ $user->name }}</option>
					@endforeach
					
				</select>
			</div>				
			
			<button class="btn btn-info btn-sm" type="submit">Apply</button>
			<a class="btn btn-info btn-sm" href="/flyers/">Reset</a>

	</form>

	@foreach($flyers as $flyer)
		<section>
			<h3>
				{{ $flyer->city }} 
				<strong>
					<a href="{{ filtered_url(['page'], ['country' => $flyer->country]) }}">[{{ country($flyer->country) }}]</a>
				</strong>
				<a href="{{ flyer_path($flyer)}}">{{ $flyer->street }}</a> 
				<span class="created-by">created by 
					<a href="{{ filtered_url(['page'], ['name' => $flyer->user->name ]) }}">{{ $flyer->user->name }}</a>
				<span>
			</h3>
			
			<p>{{ substr($flyer->description, 0, 250) . '...' }}</p>
			
		</section>
	@endforeach
	
	<div class="div-center">
		{{ $flyers->appends(Request::except('page'))->links() }}
	</div>

@stop

