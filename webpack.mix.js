const mix = require('laravel-mix');

const tailwindcss = require('tailwindcss')

mix.js('src/app.js', 'dist')
   //.sass('src/scss/app.scss', 'assets')
   .setPublicPath('dist');

mix.sass('src/tailwind.scss', 'dist').options({
   processCssUrls: false,
   postCss: [tailwindcss("tailwind.config.js")],
});