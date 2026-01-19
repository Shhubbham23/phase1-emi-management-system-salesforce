import { LightningElement, track } from 'lwc';
import getAccountsOwn from '@salesforce/apex/AccountController.getAccountsOwn';

export default class ImperativeCallOwn extends LightningElement {
    @track accounts;

    getAccountsOwn() {
        getAccountsOwn()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error('Error fetching accounts: ', error);
            });
    }
}