import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import firstLabel from '@salesforce/label/c.firstLabel';
import myImage from '@salesforce/resourceUrl/firstImage';

export default class ToastNotification extends LightningElement {
    importLabel = firstLabel;

    imageUrl = myImage; 
    
    connectedCallback() {
        this.showNotification();
    }
    showNotification() {
        const evt = new ShowToastEvent({
            title: "Welcome",
            message: "1st Notification",
            variant: 'warning',
            mode: 'sticky',
        });
        this.dispatchEvent(evt);
    }
}