import { LightningElement } from 'lwc';

export default class ParentProvider extends LightningElement {

    nameHnadler(event){
        this.template.querySelector('c-child-accepter').display(event.target.value);
    }
}