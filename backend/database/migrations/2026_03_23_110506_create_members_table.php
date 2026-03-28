<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
  public function up()
{
    Schema::create('members', function (Blueprint $table) {
        $table->id();
        $table->string('member_id')->unique();
        $table->string('fullname');
        $table->date('dob');
        $table->string('gender');
        $table->string('email')->unique();
        $table->string('mobile_no')->unique();
        $table->text('address');
        $table->string('pin_code');
        $table->string('state');
        $table->string('city');
        $table->string('password');
        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
