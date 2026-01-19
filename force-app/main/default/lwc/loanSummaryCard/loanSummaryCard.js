import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

// Fields to display
import LOAN_AMOUNT from '@salesforce/schema/Loan__c.Loan_Amount__c';
import EMI_AMOUNT from '@salesforce/schema/Loan__c.EMI_Amount__c';
import TENURE from '@salesforce/schema/Loan__c.Tenure_Months__c';
import LOAN_STATUS from '@salesforce/schema/Loan__c.Loan_Status__c';

export default class LoanSummaryCard extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [LOAN_AMOUNT, EMI_AMOUNT, TENURE, LOAN_STATUS] })
    loan;

    get loanAmount() {
        return this.loan.data ? this.loan.data.fields.Loan_Amount__c.value : '';
    }
    get emiAmount() {
        return this.loan.data ? this.loan.data.fields.EMI_Amount__c.value : '';
    }
    get tenure() {
        return this.loan.data ? this.loan.data.fields.Tenure_Months__c.value : '';
    }
    get loanStatus() {
        return this.loan.data ? this.loan.data.fields.Loan_Status__c.value : '';
    }
}