<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

use App\Flyer;
use App\Photo;
use App\Http\Requests\FlyerFormRequest;
use App\Http\Requests\ChangeFlyerRequest;

class FlyersController extends Controller
{
	public function __construct()
    {
		$this->middleware('auth', ['except' => ['show']] );
    }
    
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return view('flyers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FlyerFormRequest $request)
    {
        // validate the request via Form Request
		
		// persist the flyer into database	
		$flyer = \Auth::user()->publish(
            new Flyer($request->all())
        );
        
		// flash messaging
		flash()->success('Success', 'Your Flyer has been created.');
		
		// redirect	to /flyer->zip/$flyer->address	
		return redirect(flyer_path($flyer));
		
		
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($zip, $street)
    {
        $flyer = Flyer::locatedAt($zip, $street);
        
        return view('flyers.show', compact('flyer'));
    }    
    
    public function addPhoto($zip, $street, ChangeFlyerRequest $request)
    {
        $photo = $this->makePhoto($request->file('photo'));
        
        Flyer::locatedAt($zip, $street)->addPhoto($photo);
    }
	
	public function makePhoto(UploadedFile $file)
	{
		return Photo::named($file->getClientOriginalName())
			->upload($file);
	}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
