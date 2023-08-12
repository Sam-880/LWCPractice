import { api, LightningElement } from 'lwc';

export default class ChildAccepter extends LightningElement {
    message;
    @api display(str) {
        this.message = str.toUpperCase();
    }
}