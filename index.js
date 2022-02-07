class laCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    static get observedAttributes(){
        return ['src', 'type', 'name', "price"]
    }
    attributeChangedCallback(name, oldVal, newVal){
        if(oldVal !== newVal){
            this[name] = newVal;
        }
    }
    render({src, name, type, price}){
        const template = document.createElement('template');
            template.innerHTML = `
                    <div class="card">
                        <section class="view">
                            <img src="${src}" alt="${name}">
                        </section>
                        <section class="info">
                            <h2 class="title">${name} <span class="type">${type}</span></h2>
                            <p class="description"><slot name="description"></slot></p>
                            <span class="price">${price}</span>
                            <span   class="button"><slot name="button"></slot></span>
                        </section>
                    </div>
                ${this.style()}
            `
            return template;
    }
    style(){
        const styles = `
            <style>
                :host{
                    --height:
                    --margin:0 auto;   
                    --min-width: 320px;
                    --min-height:;
                    --width: 100%;
                    --max-height:;
                    --max-width: 800px;
                    --background: #fff;
                    --view-width:100%;
                    --view-background;
                    --view-justify-content:center;
                    --view-align-items:center;
                    --view-content;
                    --view-content-font:;
                    --view-content-left:;
                    --view-content-right:;
                    --view-content-top:;
                    --view-content-bottom:;
                    --view-content-position:;
                    --view-content-color:;
                    --img-height:fit-content;
                    --img-width: 100%;
                    --img-max-width:;
                    --img-max-height:;
                    --img-min-width:"";
                    --img-min-height:"";
                    --img-bottom:;
                    --img-top;
                    --img-left;
                    --img-right;
                    --img-position:;
                    --img-rotate;
                    --title-color:;
                    --title-font:;
                    --type-color:;
                    --type-font:;
                    --info-margin:;
                    --info-width:100%;
                    --info-padding: 10px;
                    --description-min-height:;
                    --description-max-height:;
                    --descirption-min-width:;
                    --description-max-width:;
                    --description-width:;
                    --description-height:;
                    --description-margin;
                    --price-font:;
                    --price-color:;
                    --button-justify:end;
                }
                *{
                    box-sizing: border-box;
                }
                .card{
                    margin: var(--margin);
                    display: grid;
                    min-width: var(--min-width);
                    min-height: var(--min-height);
                    height: var(--height);
                    width: var(--width);
                    max-width: var(--max-width);
                    max-height: var(--max-height);
                    background: var(--background);
                }
                .card > .view{
                    display:flex;
                    position: relative;
                    background: var(--view-background);
                    width: 100%;
                    justify-content: var(--view-justify-content);
                    align-items: var(--view-align-items);
                }
                .view::before{
                    content: var(--view-content);
                    position: var(--view-content-position);
                    left: var(--view-content-left);
                    right: var(--view-content-right);
                    top: var(--view-content-top);
                    bottom: var(--view-content-bottom);
                    color: var(--view-content-color);
                    font: var(--view-content-font);
                }
                .card img{
                    position: var(--img-position);
                    width: var(--img-width);
                    height: var(--img-height);
                    max-height: var(--img-max-height);
                    max-width:  var(--img-max-width);
                    min-height: var(--img-min-height);
                    min-width: var(--img-min-width);
                    bottom: var(--img-bottom);
                    left:var(--img-left);
                    right: var(--img-right);
                    top: var(--img-top);
                    transform: rotate(var(--img-rotate));
                }
                .info{
                    width: 100%;
                    margin: var(--info-margin);
                    display: grid;
                    grid-template: min-content 1fr min-content / 1fr;
                    padding: var(--info-padding);
                }
                .card .title{
                    color: var(--title-color);
                    font: var(--title-font);
                }
                .card .type{
                    color: var(--type-color);
                    font: var(--type-font);
                }
                .description{
                    width: var(--description-width);
                    height: var(--description-height);
                    min-height: var(--description-min-height);
                    max-height: var(--description-max-height);
                    min-width: var(--descirption-min-width);
                    max-width: var(--description-max-width);
                    margin: var(--description-margin);
                }
                .card .price{
                    width: fit-content;
                    font: var(--price-font);
                    color: var(--price-color);
                    grid-row: 3/3;
                    grid-column: 1;
                    align-self: center;
                }
                .card .button{
                    width:fit-content;
                    grid-row: 3/3;
                    grid-column: 1;
                    justify-self: var(--button-justify);
                    align-self: center;
                }
                @media  (min-width: 800px) {
                    .card{
                        display: flex;
                    }
                    .view{
                        max-width: 50%  ;
                        width: var(--view-width);
                        height: var(--height);
                    }
                    .info{
                        width: var(--info-width);
                        height: var(--height);
                    }
                }
            </style>
        `
        return styles;
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.render({
            name: this.name,
            type: this.type,
            src: this.src,
            button: this.buttonText,
            price: this.price
        }).content.cloneNode(true));
    }
}
customElements.define("la-card", laCard);
