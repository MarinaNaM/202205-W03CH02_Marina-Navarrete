export class Componente {
    template;
    render(selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).innerHTML = this.template;
        }
    }
}
