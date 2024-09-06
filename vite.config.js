import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { globSync } from 'glob'

export default defineConfig({
    plugins: [
        laravel({
            input: globSync('resources/{css,js,Components,views}/**/*.{css,js,vue}'),
            // input: [
            //     'resources/css/app.css',
            //     'resources/js/app.js',

            // Filament Theme
            // 'resources/css/filament/admin/theme.css',

            // Inductor
            // 'resources/views/**/*.blade.php',
            // 'resources/js/Components/**/*.js',
            // 'resources/js/Components/**/*.vue',
            // 'resources/js/Components/Counter.vue',

            // ...globSync("resources/{css,js,Components}/**/*.{css,js,vue}")

            // 'vendor/chrisreedio/inductor/resources/js/**/*.js',
            // ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
})
