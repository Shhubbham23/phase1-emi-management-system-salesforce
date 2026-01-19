import { LightningElement, wire } from 'lwc';
import { registerListener } from 'c/pubsub';
import { CurrentPageReferance} from 'lightning/navigation';
export default class SubscribeerEx extends LightningElement {
    typedInfo;
    @wire(CurrentPageReferance)pageRef;
    handleClick(){
        registerListener('inputevent',this.hetInfo, this )
    }
    getInfo(info){
        this.typedInfo = info;
    }
}