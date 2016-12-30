<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
    
    
    
    public function scopeLocatedAt($query, $zip, $street)
    {
        $street = str_replace('-', ' ', $street);
        
        return $query->where(compact('zip', 'street'));
    }
    
    
    public function getPriceAttribute($price)
    {
        return '$' . number_format($price / 100, 2);
    }
	
	/**
	 * A glyer belongs to a user
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
