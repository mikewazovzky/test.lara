<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Url;

class TestController extends Controller
{
    public function test(Request $request)
	{		
		$url = (new Url)->except(['page'])->with(['city' => 'Moscow'])->get();
		
		return view('test', compact('request', 'url'));
	}
}
