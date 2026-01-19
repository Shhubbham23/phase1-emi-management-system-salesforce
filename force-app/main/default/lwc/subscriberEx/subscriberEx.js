import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class SubscriberEx extends LightningElement {

    typedInfo;

    @wire(CurrentPageReference) pageRef;

    handleClick() {
        registerListener('inputevent', this.getInfo, this)
    }

    handleUnsubscribe() {
        unregisterListener('inputevent', this.getInfo, this);
    }

    getInfo(info) {
        this.typedInfo = info;
    }

}