import { fireEvent } from 'c/pubsub';
import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'

export default class PublisherEx extends LightningElement {
    inputInfo;
    @wire(CurrentPageReference)pageRef;
    handleChange(event){
        this.inputInfo = event.target.value;
    }
    handleClick(){
        fireEvent(this.pageRef, 'inputevent', this.inputInfo);
    }
}