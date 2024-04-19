import { writable, type Writable } from 'svelte/store';

export const count = writable() as Writable<{ id: string; title: string; price: number; image: string; note: string }[]>