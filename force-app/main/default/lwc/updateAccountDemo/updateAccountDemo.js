import { LightningElement, api, wire, track } from 'lwc';
import displayAccount from '@salesforce/apex/AccountDeleteController.displayAccount';
import updateRecords from '@salesforce/apex/AccountDeleteController.updateRecords';
import { refreshApex } from '@salesforce/apex';
export default class UpdateAccountDemo extends LightningElement {
    @api accountId;
    @track accountList = [];
    @track accountsData = [];
    @wire(displayAccount)
    accounts(result) {
        this.accountsData = result;
        if (result.data) {
            this.accountList = result.data;
            // console.log('Result error ==>' + JSON.stringify(this.accountsData));
        }
    }


    handleUpdate(event) {
        this.accountId = event.target.value;
        //console.log('Result error ==>' + JSON.stringify(this.accountId));
        updateRecords({ accId: this.accountId })
            .then(() => {
                return refreshApex(this.accountsData);
            })
            .catch((error) => {
                console.log('Result error ==>' + JSON.stringify(error));
            })
    }
}