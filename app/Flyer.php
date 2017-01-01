<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Photo;

class Flyer extends Model
{
    protected $fillable = [
		'street',
		'city',
		'zip',
		'country',
		'state',
		'price',
		'description'	
	];    
    
    
    public static function locatedAt($zip, $street)
    {
        $street = str_replace('-', ' ', $street);
        
        return static::where(compact('zip', 'street'))->firstOrFail();
    }
    
	/**
	 * Format and return price attribute
	 * 
     * @param integer $price
	 * @return string
	 */	    
    public function getPriceAttribute($price)
    {
        return '$' . number_format($price / 100, 2);
    }
    
	/**
	 * Add photo to a flyer
	 * 
     * @param App\Photo $photo
	 * @return App\Photo
	 */	    
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
	 * Determine if the given user creted the flyer
	 * 
	 * @param  App\User $user
	 * @return boolean
	 */		
	public function ownedBy(User $user)
	{
        return $this->user_id == $user->id;
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
