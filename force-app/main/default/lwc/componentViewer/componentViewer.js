import { LightningElement, track } from 'lwc';
import getContact from '@salesforce/apex/ContactController.getContact';

export default class ContactViewer extends LightningElement {
    @track contact;
    @track error;

    // Track rendering
    renderedCallback() {
        console.log('✅ renderedCallback: Component rendered.');
    }

    // When button is clicked
    handleLoad() {
        console.log('🚀 handleLoad: Button clicked, calling Apex...');
        getContact()
            .then(result => {
                console.log('✅ Apex call SUCCESS, result:', result);
                if (result) {
                    this.contact = result;
                    this.error = null;
                    console.log('🟢 Contact found, storing result.');
                } else {
                    this.contact = null;
                    this.error = 'No contact found.';
                    console.log('⚠️ No contact found, dispatching event.');
                    const event = new CustomEvent('contactnotfound');
                    this.dispatchEvent(event);
                }
            })
            .catch(error => {
                console.log('❌ Apex call FAILED, error:', error);
                this.contact = null;
                this.error = error.body.message;
            });
    }
}