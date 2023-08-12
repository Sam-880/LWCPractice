import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    changeName;
    handleClick(event){
        //this.template.querySelector('c-child-component').handleChangeValue();
        this.changeName='Welcome To LWC Demo!!!!!!!!!!!'
    }
}