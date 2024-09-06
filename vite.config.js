import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { globSync } from 'glob'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                ...globSync('resources/{css,js,Components,views}/**/*.{css,js,vue}'),
                ...globSync('vendor/chrisreedio/inductor/resources/js/**/*.{js,vue,ts}'),
            ],
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
