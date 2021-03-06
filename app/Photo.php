<?php

namespace App;

use Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class Photo extends Model
{
	protected $table = 'flyer_photos';
	
	protected $fillable = ['name', 'path', 'thumbnail_path'];
	
	protected $file;
	
    /**
     * Upload file
	 * Boot method is called before creating a new model	 
	 * If closure return true - proceeds to create a new model  
	 * if false - cancels creation of the model
	 *
     * @return void
     */	
	protected static function boot()
	{
		static::creating(function($photo) {
			return $photo->upload();     
		});
	}
	
    /**
	 * A photo belongs to a Flyer
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */	
	public function flyer()
	{
		return $this->belongsTo('App\Flyer');
	}	
	
	/**
	 * Static constructor. Create photo object from uploaded file
	 * 
	 * @param Illuminate\Http\UploadedFile $file
	 * @return App\Photo self
	 */	
	public static function fromFile(UploadedFile $file) 
	{
		$photo = new static;
		
		$photo->file = $file;
		
		return $photo->fill([
			'name' => $photo->fileName(),
			'path' => $photo->filePath(),
			'thumbnail_path' => $photo->thumbnailPath()
		]);
	}
	
	/**
	 * Create photo file name
	 * 
	 * @return string 
	 */	
	protected function fileName()
	{
		$name = time() . $this->file->getClientOriginalName();
		
		$extention = $this->file->getClientOriginalExtension();
		
		return "{$name}.{$extention}";
	}

	/**
	 * Create photo file path
	 * 
	 * @return string 
	 */	
	protected function filePath()
	{
		return $this->baseDir() . '/' . $this->fileName();
	}
	
	/**
	 * Create photo thumbnail path
	 * 
	 * @return string 
	 */	
	protected function thumbnailPath()
	{
		return $this->baseDir() . '/tn-' . $this->fileName();
	}
	
	/**
	 * Return images directory path
	 * 
	 * @return string 
	 */		
	protected function baseDir()
	{
		return 'images/photos';
	}	
    
	/**
     * Move photo to a folder
	 *
     * @return App\Photo self
     */
	public function upload()
	{
		$this->file->move($this->baseDir(), $this->path);
		
		$this->makeThumbnail();
			
		return $this;
	}
	
    /**
     * Create and save thumbnail for the photo
     *
     * @return void
     */
	public function makeThumbnail()
	{
		Image::make($this->path)
			->fit(200)
			->save($this->thumbnail_path);
	}
	
	public function delete()
	{
		\File::delete([
			$this->path,
			$this->thumbnail_path
		]);
		
		parent::delete();
	}
    

	

}
