<?php

namespace App\Http\Controllers;

use App\Services\CRUDinterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Faker\Factory as Faker;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function Run(String $reactComponent, CRUDinterface $service) {
		$data = $service->Execute();
		return Inertia::Render($reactComponent, [ 'foo' => 'test', 'data' => $data ]);
	}
}
