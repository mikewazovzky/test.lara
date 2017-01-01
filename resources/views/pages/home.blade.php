@extends('layouts.app')

@section('content')	
	
	<div class="jumbotron">
    
		<h1>Lara Home Page</h1>
		
		<p>
			This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.
		</p>
    
        @if(Auth::check())
            <a href="/flyers/create" class="btn btn-primary">Create Flyer</a>
        @else
            <a href="/login" class="btn btn-primary">Login</a>
            <a href="/register" class="btn btn-primary">Sign Up</a>
        @endif
        
	</div>

@endsection
