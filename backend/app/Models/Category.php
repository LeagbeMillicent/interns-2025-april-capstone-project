<?php

namespace App\Models;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'description', 'image'];


    // Define the relationship with the Menu model
    // A category can have many menus
    public function menus()
    {
        return $this->hasMany(Menu::class);
    }
}
