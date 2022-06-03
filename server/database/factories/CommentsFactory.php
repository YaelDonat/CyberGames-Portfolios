<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Comments;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\\Comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'content' => $this->faker->paragraph(3),
            'title' => $this->faker->words(1, true),
        ];
    }
}
