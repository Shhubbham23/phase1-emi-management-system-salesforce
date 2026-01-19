import { LightningElement } from 'lwc';
import { publish,subscribe,unsubscribe,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/MyMessageChannel__c"

export default class PublisherComp extends LightningElement {
myMessage;
    context = createMessageContext();
    handleChange(event) {
        this.myMessage = event.target.value;
    }
    publishMC() {
        const message = {
            messageToSend: this.myMessage,
            sourceSystem: "From LWC"
        };
        publish(this.context, SAMPLEMC, message);
    }
}