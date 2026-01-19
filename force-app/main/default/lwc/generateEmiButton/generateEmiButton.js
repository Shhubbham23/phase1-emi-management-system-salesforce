import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import generateEmis from '@salesforce/apex/GenerateEmIController.generateEmis';

export default class GenerateEmiButton extends LightningElement {
    @api recordId;

    handleClick() {
        generateEmis({ loanId: this.recordId })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'EMIs generated successfully. Page will refresh.',
                        variant: 'success'
                    })
                );

                // 🔑 reliable refresh
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}