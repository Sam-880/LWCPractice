import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MyFirstLwcPractice extends LightningElement {
    myTitle='Lightning Web Component Practice';
    message='Hi Welcome to the LWC practice!!!!!!!!!!';
    variant='error';

    handleClick(event){
       
        this.ShowToast(this.myTitle,this.message,this.variant);
    }
    ShowToast(myTitle,message,variant){
       // console.log("Hi I'm In");
        const event  = new ShowToastEvent({
            title:myTitle,
            message:message,
            variant:variant,
        });
        this.dispatchEvent(event);
    }

}