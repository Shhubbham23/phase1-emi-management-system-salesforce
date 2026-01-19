// selector.js
import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['User.Name'];

export default class Selector extends LightningElement {
    name; // 👈 use 'name' instead of 'userName'

    @wire(getRecord, { recordId: USER_ID, fields: FIELDS })
    wiredUser({ error, data }) {
        if (data) {
            this.name = data.fields.Name.value;
        } else if (error) {
            this.name = 'User';
            console.error('Error fetching user name:', error);
        }
    }
}