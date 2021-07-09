<?php

namespace App\Services\Units;

use App\Models\Unit;

class UnitsReader {
	public function Execute() {
		return Unit::get();
	}
}