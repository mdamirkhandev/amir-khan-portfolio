<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home/Page'))->name('home');
Route::get('/about', fn() => Inertia::render('About/Page'))->name('about');
Route::get('/resume', fn() => Inertia::render('Resume/Page'))->name('resume');
Route::get('/services', fn() => Inertia::render('Services/Page'))->name('services');
