<?php

namespace Database\Factories;

use App\Models\Visit;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

class VisitFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Visit::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'unit_id' => $this->faker->randomDigitNotZero(),
			'entry' => $this->faker->dateTime(),
			'exit' => $this->faker->dateTime()
		];
	}
}
