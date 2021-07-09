<?php
namespace App\Services\CRUDServices;

use App\Services\CRUDServices\INT_CRUDService;
use App\Models\Unit;

class UnitsLister implements INT_CRUDService {
	function __construct()
	{
		
	}
	
	public function Execute() {
		return Unit::get();
	}
}