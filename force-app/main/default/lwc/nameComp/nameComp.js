import { LightningElement, api } from 'lwc';

export default class NameComp extends LightningElement {
    firstName = 'Om';
    midName = 'Jay';
    
    @api lastName;

    handleLastName(event) {
        this.lastName = event.target.value;
        const lastNameEvent = new CustomEvent('lastnamechange', {
            detail: this.lastName
        });
        this.dispatchEvent(lastNameEvent);
    }
}