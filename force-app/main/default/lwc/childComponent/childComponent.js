import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api itemName='Samir Dhapke';

   @api handleChangeValue(){
    this.itemName='Salesforce LWC Demo';
   }
}