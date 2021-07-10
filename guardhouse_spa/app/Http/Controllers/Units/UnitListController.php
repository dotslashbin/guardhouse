<?php

namespace App\Http\Controllers\Units;

use App\Http\Controllers\Controller;
use App\Services\Units\UnitsReader as reader;
use Illuminate\Http\Request;
use Faker\Factory as Faker;
use Inertia\Inertia;


class UnitListController extends Controller
{
	/**
	 * Handle the incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function __invoke(Request $request)
	{
		$lister = new reader();
		return $this->Run('Main', $lister, 'units');
	}
}
