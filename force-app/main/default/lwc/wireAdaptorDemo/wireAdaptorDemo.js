import { LightningElement, api, wire } from 'lwc';

// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import Phone_FIELD from '@salesforce/schema/Account.Phone';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
export default class WireAdaptorDemo extends LightningElement {

    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: ["Account.Name", "Account.Phone"] })
    record;


    get name() {
        // return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : " ";
        return this.record.data.fields.Name.value;
    }

    get phone() {
        // return this.record.data ? getFieldValue(this.record.data, Phone_FIELD) : " ";
        return this.record.data.fields.Phone.value;

    }
}