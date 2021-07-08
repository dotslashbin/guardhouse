<?php

namespace Database\Seeders;

use App\Models\Visitor;
use Illuminate\Database\Seeder;
class VisitorSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		for($i = 1; $i <= 10; $i++) {
			$letter = chr(rand(65,90));
			$digits = rand(1,99);
			Visitor::factory()->count(1)->create(['ic_last_3' => $digits.$letter]);
		} 
	}
}
