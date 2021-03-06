<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Flyer;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
	
	/**
	 * A user has many flyers
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */	
	public function flyers()
	{
		return $this->hasMany('App\Flyer');
	}
    
    /**
     * Add flyer to user flyers collection and save it
     *
     * @param App\Flyer $flyer
     * @return App\Flyer
     */
    public function publish(Flyer $flyer)
    {
        return $this->flyers()->save($flyer);
    }
    
    /**
     * Check if user ownes the relation
     *
     * @param $relation
     * @return boolean
     */        
    public function owns($relation)
    {
        return $relation->user_id == $this->id;
    }
}
