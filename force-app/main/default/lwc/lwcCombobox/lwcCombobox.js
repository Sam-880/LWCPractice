import { LightningElement, track } from 'lwc';
import getAccountRecords from '@salesforce/apex/ComboboxDemo.getAccountRecords';

export default class LwcCombobox extends LightningElement {
    @track value = '';// why track--> bec value will change many times
    @track accOption=[];

    get options() {
        return this.accOption;
    }
    connectedCallback(){
       
        getAccountRecords()
        .then(result => {
            let arr=[];
            for(var i=0; i<result.length; i++){
                arr.push({label: result[i].Name, value: result[i].Id});
            }
            this.accOption=arr;
        })
        .catch(error => {

        })
    }
    handleChanged(event){
        this.value=event.detail.value;
    }
}