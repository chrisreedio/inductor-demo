import './bootstrap'
import '/vendor/chrisreedio/inductor/resources/js/inductor'
// import '/public/js/chrisreedio/inductor/inductor-scripts'

$inductor.addComponentPath(import.meta.glob('./Components/**/*.vue'))
