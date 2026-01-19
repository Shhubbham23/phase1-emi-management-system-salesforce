import { LightningElement, api, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getEmis from '@salesforce/apex/GenerateEmIController.getEmis';

export default class LoanEmiContainer extends LightningElement {
    @api recordId;

    emiResult; // store wire response
    emis = [];

    @wire(getEmis, { loanId: '$recordId' })
    wiredEmis(result) {
        this.emiResult = result;
        if (result.data) {
            this.emis = result.data;
        }
    }

    handleEmiGenerated() {
        refreshApex(this.emiResult);
    }
}