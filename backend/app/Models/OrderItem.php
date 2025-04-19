<?php

namespace App\Models;

use Order;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'order_id',
        'menu_id',
        'quantity',
        'price',
    ];
    // public function order()
    // {
    //     return $this->belongsTo(Order::class);
    // }
    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
