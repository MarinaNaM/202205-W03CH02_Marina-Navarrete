import { Lista } from '../components/lista.js';
import { listaTareas } from './data.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Lista(listaTareas).render('.lista');
    });
})();
