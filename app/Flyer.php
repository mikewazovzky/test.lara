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
        
        return static::where(compact('zip', 'street'))->firstOrFail();
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
	 * Determine if the given user creted the flyer
	 * 
	 * @param  App\User $user
	 * @return boolean
	 */		
	public function ownedBy(User $user)
	{
		
		//dd([$this->user_id, $user->id]);
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
