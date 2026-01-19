import { LightningElement } from 'lwc';

export default class ClientDetails extends LightningElement {
    lastName = '';

    handleLastName(event) {
        console.log('Last Name: ' + event.detail);
        this.lastName = event.detail;
    }
}