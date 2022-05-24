import { ClaseTarea } from '../js/clase_tarea.js';
import { Componente } from './components.js';
import { Tarea } from './tarea.js';

export class Lista extends Componente {
    template;
    constructor(listaTareas) {
        super();
        this.listaTareas = listaTareas;
        this.template = this.createTemplate();
    }
    createTemplate() {
        let listaHTML = '';
        this.listaTareas.forEach((item) => {
            listaHTML += new Tarea(item).createTemplate();
        });
        let template = `
            <ul>
                ${listaHTML}
            </ul>
        `;
        return template;
    }
}
