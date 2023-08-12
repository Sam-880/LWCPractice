import { LightningElement, track } from 'lwc';

export default class MiscNotification extends LightningElement {
    name;
   // @track password;
     nameHandler(event){
         this.name=event.target.value;
         console.log('u r in handler'+this.name);
     }
}