@extends('layouts.app')

@section('content')
	
	<p>{{ $code }}</p>
	<p>{{ $country }}</p>

@stop

@section('footer.scripts')
	<script src="/js/test.js" ></script>
@stop