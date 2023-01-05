import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    message;

    parentHandler(event) {
        this.message = event.detail;
    }

}