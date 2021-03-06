<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
	use HasFactory;

	public function visitor() {
		return $this->belongsTo(Visitor::class, 'visitor_id', 'id');
	}

	public function unit() {
		return $this->belongsTo(Unit::class, 'unit_id', 'id');
	}
}



