import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/LWCClass.getAccounts';
export default class ImperativeCall extends LightningElement {

    handleClick() {
        var data;
        getAccounts()
            .then((result) => {
                data = result;
                console.log('in success');
                console.log('hi' + data);
            })
            .catch((error)=>{
                console.log('in error');
            })
             console.log('hi');
    }
}