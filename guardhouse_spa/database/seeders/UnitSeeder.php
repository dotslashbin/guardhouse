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
		for($block = 1; $block <= 10; $block++) {
			for($unit = 1; $unit <= 10; $unit++) {
				Unit::factory()->count(1)->create(['block_unit' => $block.'-'.$unit]);
			}
		}
	}
}