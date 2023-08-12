import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LoginNotification extends LightningElement {

   @track name;
   @track password;
    nameHandler(event) {
        this.name=event.target.value;
        console.log('u r in handler'+this.name);
    }
    passwordHandler(event) {
       
        this.password = event.target.value;
        console.log('u r in handler'+this.password);
    }

    handleClick(event){
        console.log('u r in click handler');
        if(this.name==''){
            const evt=this.dispatchEvent(new ShowToastEvent({
                title:'Alert for Name',
                message:'Please Enter Your name',
                variant:'warning'
            }));
            this.dispatchEvent(evt);
        }
        if (this.password == '') {
            const evt = this.dispatchEvent(new ShowToastEvent({
                title: 'Alert for Password',
                message: 'Please Enter Your password',
                variant: 'success'
            }));
            this.dispatchEvent(evt);
        }
    }
}