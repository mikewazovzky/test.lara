<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.home');
});

Auth::routes();

Route::get('/test', 'TestController@test');

Route::resource('tasks', 'TasksController');

Route::resource('flyers', 'FlyersController');
Route::get('{zip}/{street}', 'FlyersController@show');
Route::post('{zip}/{street}/photos', ['as' => 'store_photo_path', 'uses' => 'PhotosController@store']);

Route::delete('photos/{photo}', 'PhotosController@destroy');