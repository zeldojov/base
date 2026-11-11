import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';
import Clipboard from '@ryangjchandler/alpine-clipboard'
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import resize from '@alpinejs/resize'
// import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import anchor from '@alpinejs/anchor'
import morph from '@alpinejs/morph'
import sort from '@alpinejs/sort'
import { createIcons, icons } from 'lucide';

Alpine.plugin(Clipboard)
Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(resize)
// Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(anchor)
Alpine.plugin(morph)
Alpine.plugin(sort)

Livewire.start()

createIcons({
    icons,
});
