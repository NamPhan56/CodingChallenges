//1. create events
import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    childHandler() {
        const evt = new CustomEvent('sendmessage', {detail: "Hey, This message is sent from child Component"});
        this.dispatchEvent(evt);
    }
}