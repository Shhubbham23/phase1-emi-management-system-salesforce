import { LightningElement } from 'lwc';
import getAccountsRelatedToName from '@salesforce/apex/imperativeParam.getAccountsRelatedToName';
import getAccountsRelatedToNameList from '@salesforce/apex/imperativeParam.getAccountsRelatedToNameList';
import getAccounts from '@salesforce/apex/imperativeParam.getAccounts';

export default class ImperativeRev extends LightningElement {

    handleClick() {
        //     getAccountsRelatedToName({name: 'MH'})
        //     .then((result)=>{
        //         console.log('data--- '+JSON.stringify(result));
        //     })
        //     .catch((error)=>{
        //         console.log('data--- '+JSON.stringify(error));
        //     })
        // }
        // let info = [];
        // info.push('Om');
        // info.push('Roshan');
        // getAccountsRelatedToNameList({ nameList: info })
        //     .then((result) => {
        //         console.log('data--- ' + JSON.stringify(result));
        //         this.accounts = result;
        //     })
        //     .catch((error) => {
        //         console.log('data--- ' + JSON.stringify(error));
        //     })
        var obj = {
            name : 'MH',
            activeStatus : 'No'
        }
        getAccounts({input : obj})
         .then((result) => {
                console.log('data--- ' + JSON.stringify(result));
                this.accounts = result;
            })
            .catch((error) => {
                console.log('data--- ' + JSON.stringify(error));
            })
    }
}