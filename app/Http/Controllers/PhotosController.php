<?php

namespace App\Http\Controllers;

use App\Flyer;
use App\Photo;
use App\Http\Requests\AddPhotoRequest;

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
		//Photo::findOrFail($id)->delete();
		
		$photo->delete();
		
		return back();
    }
}
