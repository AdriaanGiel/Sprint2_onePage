let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |

 */

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
});

mix.options({
    processCssUrls: false,
    publicPath: 'public'
});

mix.autoload({
    jquery: ['$', 'window.jQuery']
});


mix.js('assets/js/app.js', 'public/js');
mix.stylus('assets/stylus/app.styl', 'public/css');

mix.copy('node_modules/lightgallery.js/dist/css/lightgallery.css', 'public/css/lightgallery.css');

mix.copyDirectory('assets/img', 'public/img');

mix.extract(['jquery','jquery-scrollify','lightgallery.js'],'public/js/vendors.js');


