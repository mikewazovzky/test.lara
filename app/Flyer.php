<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Photo;

class Flyer extends Model
{
    protected $fillable = [
	    'user_id',   // temporary
		'street',
		'city',
		'zip',
		'country',
		'state',
		'price',
		'description'	
	];
    
    
	/**
	 * Find the flyer at a given address
	 * 
	 * @return App\Flyer
	 */	    
    public static function locatedAt($zip, $street)
    {
        $street = str_replace('-', ' ', $street);
        
        return static::where(compact('zip', 'street'))->first();
    }
    
    
    public function getPriceAttribute($price)
    {
        return '$' . number_format($price / 100, 2);
    }
    
    public function addPhoto(Photo $photo)
    {
        return $this->photos()->save($photo);
    }
	
	/**
	 * A flyer belongs to a user
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */	
	public function user()
	{
		return $this->belongsTo('App\User');
	}

    /**
	 * A flyer is composed of many photos
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */	
	public function photos()
	{
		return $this->hasMany('App\Photo');
	}
}
