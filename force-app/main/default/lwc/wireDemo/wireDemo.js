import { LightningElement, track, wire } from 'lwc';
import getAccountRecord from '@salesforce/apex/WireDemoClass.getAccountRecord';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Record Id', fieldName: 'Id' },
];
export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];
   
    @wire(getAccountRecord)
    wiredAccountrecord({ data, error }) {
        if (data) {
            this.data = data;
        } else if (error) {
            console.log('Error Occured')
        }
       }
    

}