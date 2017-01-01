<?php

namespace App;

use Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class Photo extends Model
{
	protected $table = 'flyer_photos';
	
	protected $fillable = ['name', 'path', 'thumbnail_path'];
    
    protected $baseDir = 'images/photos';
	
    /**
     * Static function creates new App\Photo object and fills its data
     *
     * @param string $name
     * @return App\Photo
     */
    public static function named($name)
    {
        return (new static)->fillData($name);        
    }	
    
    /**
     * Fill photo data
     *
     * @param string $name
     * @return App\Photo
     */
	public function fillData($name)
	{
		$this->name = sprintf("%s-%s", time(), $name);
		
		$this->path = sprintf("%s/%s", $this->baseDir, $this->name);
		
		$this->thumbnail_path = sprintf("%s/tn-%s", $this->baseDir, $this->name);
		
		return $this;		
	}
	
    /**
     * Upload image file
     *
     * @param Illuminate\Http\UploadedFile $file
     * @return App\Photo
     */
	public function upload(UploadedFile $file)
	{
		$file->move($this->baseDir, $this->name);
		
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
}
