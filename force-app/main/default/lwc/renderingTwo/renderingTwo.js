import { LightningElement } from 'lwc';

export default class RenderingTwo extends LightningElement {
    visiblity= "";
    handleVisiblity(){
        if(this.visiblity === 'slds-hide'){
            this.visiblity = '';
        }else{
            this.visiblity = 'slds-hide';
        }
    }
}