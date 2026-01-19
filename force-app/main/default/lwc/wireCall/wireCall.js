import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/wireClass.getAccounts';
export default class WireCall extends LightningElement {

accInfo;


    @wire(getAccounts)
    getWiredAccounts({error, data}){
        if(data){
            this.accInfo = data;
            console.log('data--- '+JSON.stringify(this.accInfo));
        } if(error){
            this.error = error;
        }
    }
}