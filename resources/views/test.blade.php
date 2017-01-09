@extends('layouts.app')

@section('content')
	
	<p>{{ var_dump($request->path()) }}</p>
	<p>{{ var_dump($request->url()) }}</p>
	<p>{{ var_dump($request->fullUrl()) }}</p>
	<p>{{ var_dump(url()->current()) }}</p>
	
	<p>{{ var_dump(request()->fullUrlWithQuery([])) }}</p>
	
	<hr>
	<p>{{ var_dump($url) }}</p>
@stop