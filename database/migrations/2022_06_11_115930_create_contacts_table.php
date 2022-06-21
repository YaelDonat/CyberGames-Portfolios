<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id'); 
            $table->string('name'); 
            $table->string('email'); 
            $table->text('message'); 
            $table->timestamps();
        });
    }

    // c'est pour la table contact, genre on enregistre à chaque fois dans la bdd dès que le user utilise le form contact

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};
