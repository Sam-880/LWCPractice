
import { LightningElement, track } from 'lwc';

export default class ConditionalDirectiveswithIfElse extends LightningElement {
    @track onClickButtonlabel = 'Show';
    myTitle = 'Salesforce Noob';
    @track isVisible = false;
    clickHandler(event) {
        const label = event.target.label;
        if (label === 'Show') {
            this.onClickButtonlabel = 'Hide';
            this.isVisible = true;
        }
        else if (label === 'Hide') {
            this.onClickButtonlabel = 'Show';
            this.isVisible = false;
        }

    }
}