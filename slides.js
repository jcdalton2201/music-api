export class SlideOne extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = 'THIS IS SLIDE ONE';
    }
}
customElements.define('slide-one',SlideOne);
export class SlideTwo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = 'THIS IS SLIDE TWO';
    }
}
customElements.define('slide-two',SlideTwo);
