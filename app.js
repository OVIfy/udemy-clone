const allAccordionElementsOnPage = document.querySelectorAll('.accordion')


class Accordion{
    constructor(accordionElement){
        this.accordionElement = accordionElement
        this.accordionHeader = this.accordionElement.querySelector('.accordion-heading')
        this.accordionContent = this.accordionElement.querySelector('.accordion-contents')
        this.accordionHeader.addEventListener('click', this.handleClick.bind(this)) //😕
        console.log(this.accordionContent.style)
    }

    handleClick(e){
        this.accordionContent.classList.toggle('none')
    }
}

allAccordionElementsOnPage.forEach( accordionElement => new Accordion(accordionElement))