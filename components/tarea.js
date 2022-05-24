import { ClaseTarea } from '../js/clase_tarea.js';
import { Componente } from './components.js';

export class Tarea extends Componente {
    template;
    constructor(tarea = new ClaseTarea()) {
        super();
        this.tarea = tarea;
        this.template = this.createTemplate();
    }

    createTemplate() {
        let template = `
        <li>${this.tarea.id} - ${this.tarea.nombre}: ${this.tarea.responsable}</li>   
    `;
        return template;
    }
}
