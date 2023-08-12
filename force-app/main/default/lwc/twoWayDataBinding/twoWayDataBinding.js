import { api, LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
@api name;
@api age;
    nameHandler(event){
        this.name=event.target.value;
        console.log('Your name is :'+ this.name);
    }
    ageHandler(event){
        this.age=event.target.value;
        console.log('Your age is :'+ this.age);
    }
}