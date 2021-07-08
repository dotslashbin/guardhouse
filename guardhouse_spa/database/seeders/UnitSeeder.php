<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Unit;

class UnitSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		for($i = 1; $i <= 10; $i++) {
			$block = rand(1,5); 
			$unit = rand(1, 5);
			Unit::factory()->count(1)->create(['block_unit' => $block.'-'.$unit]);
		}
	}
}
