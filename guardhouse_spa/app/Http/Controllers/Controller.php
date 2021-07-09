<?php

namespace App\Http\Controllers;

use App\Services\CRUDinterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;


class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function Run(String $componentName, CRUDinterface $service) {
		return Inertia::render($componentName,$service->Execute());
	}
}
