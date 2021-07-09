<?php

namespace App\Services\Units;

use App\Models\Unit;
use App\Services\CRUDinterface;

/**
 * Service responsible for reading units data
 */
class UnitsReader implements CRUDinterface {
	public function Execute() {
		return Unit::get();
	}
}