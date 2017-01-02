<?php

namespace App\Http\Controllers;

use App\Flyer;
use App\Photo;
use App\Http\Requests\AddPhotoRequest;

use Illuminate\Support\Facades\Auth;


class PhotosController extends Controller
{
    /**
     * Add photo to a flyer
     *
     * @param  string  $zip
     * @param  string  $street 
     * @param  App\Http\Requests\FlyerFormRequest  $request     
     * @return void
     */
    public function store($zip, $street, AddPhotoRequest $request)
    {
        $photo = Photo::fromFile($request->file('photo'));
        
        Flyer::locatedAt($zip, $street)->addPhoto($photo);
    }
	
	public function destroy(Photo $photo)
    {
		//dd([$photo->flyer->user_id, Auth::user()->id]);
		
		if(!Auth::user() || $photo->flyer->user != Auth::user()) {
			
			flash()->error('Unauthorized!', 'You have no permission for this operation.');
			
			return back();
		}
		
		$photo->delete();
		
		return back();
    }
}
