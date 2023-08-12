import { LightningElement ,track} from 'lwc';
import getAccountRecord from '@salesforce/apex/WireDemoClass.getAccountRecord';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Record Id', fieldName: 'Id' },
];
export default class ImperativeMethodBySalesforceNoob extends LightningElement {

    @track columns = columns;
    @track data = [];
   
    connectedCallback(){
        getAccountRecord()
        .then(result=>{
            this.data=result;
        })
        .catch(error=>{
            console.log('error Occured!!!!!!')
        })
    };
}