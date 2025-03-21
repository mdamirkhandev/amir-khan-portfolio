<?php

use Inertia\Inertia;
use App\Models\Language;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;

Route::get('/', fn() => Inertia::render('Home/Page'))->name('home');
Route::get('/about', fn() => Inertia::render(
    'About/Page',
    [
        'features' => Language::all(),
        'testimonials' => Testimonial::all(),
    ]
))->name('about');
Route::get('/resume', fn() => Inertia::render('Resume/Page'))->name('resume');
Route::get('/services', fn() => Inertia::render('Services/Page', ['services' => \App\Models\Service::all()]))->name('services');
Route::get('/portfolio', fn() => Inertia::render('Portfolio/Page'))->name('portfolio');
Route::get('/contact', fn() => Inertia::render('Contact/Page'))->name('contact');
