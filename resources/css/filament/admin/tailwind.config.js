import preset from '../../../../vendor/filament/filament/tailwind.config.preset'

export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './resources/js/Components/**/*.vue',
        './vendor/filament/**/*.blade.php',

        // Inductor
        './vendor/chrisreedio/inductor/resources/views/**/*.blade.php',
        './vendor/chrisreedio/inductor/resources/js/**/*.vue',
    ],
}
