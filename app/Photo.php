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
     * Boot method is called before creating a new model
	 * Uploads file
	 *
     * @return true if success - proceeds to create a new model object), false otherwise - cancel creation of the model
     */	
	protected static function boot()
	{
		static::creating(function($photo) {
			return $photo->upload();     
		});
	}
	
    /**
     * Upload image file
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
     * Make and save thumbnail file
     *
     * @return ???
     */
	public function makeThumbnail()
	{
		Image::make($this->path)
			->fit(200)
			->save($this->thumbnail_path);
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
		
	protected function fileName()
	{
		$name = time() . $this->file->getClientOriginalName();
		
		$extention = $this->file->getClientOriginalExtension();
		
		return "{$name}.{$extention}";
	}
	
	protected function filePath()
	{
		return $this->baseDir() . '/' . $this->fileName();
	}
	
	protected function thumbnailPath()
	{
		return $this->baseDir() . '/tn-' . $this->fileName();
	}
	
	protected function baseDir()
	{
		return 'images/photos';
	}	
}
