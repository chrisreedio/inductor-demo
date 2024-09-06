<x-filament-panels::page>
    {{--<livewire:vue component="Counter" />--}}
    <div wire:ignore class="flex flex-col w-auto p-2 space-y-4">
        {{--<livewire:vue component="SampleComponent" />--}}
        <livewire:vue component="SampleCounter" />
    </div>
    {{--<livewire:vue>--}}
    {{--    <div class="border-2 border-red-500 p-4">--}}
    {{--        Hello! This is a Vue Component wrapped in a Livewire Component.--}}
    {{--    </div>--}}
    {{--</livewire:vue>--}}
</x-filament-panels::page>
