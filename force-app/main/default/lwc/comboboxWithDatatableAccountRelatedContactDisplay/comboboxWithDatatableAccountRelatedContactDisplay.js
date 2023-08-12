import { LightningElement, track } from 'lwc';
import getAccountRecords from '@salesforce/apex/ComboboxWithAccountsForRelatedContacts.getAccountRecords';
import getAccountContacts from '@salesforce/apex/ComboboxWithAccountsForRelatedContacts.getAccountContacts';
const columns = [
    { label: 'Contact Name', fieldName:'Name'},
    { label: 'Email', fieldName:'Email'},
];
export default class ComboboxWithDatatableAccountRelatedContactDisplay extends LightningElement {
    @track value = '';
    @track accOption = [];
    @track isVisible = false;
    @track columns=columns;
    @track data=[];
    get options() {
        return this.accOption;
    }

    connectedCallback() {
        getAccountRecords()
            .then(result => {
                let arr = [];
                for (var i = 0; i < result.length; i++) {
                    arr.push({ label: result[i].Name, value: result[i].Id });
                }
                this.accOption = arr;
            })
            .catch(error => {

            })
    }
    handleChangeAccount(event) {
        this.isVisible = true;
        this.value = event.detail.value;
        //window.alert(this.value);
        getAccountContacts({lstAccountIds: this.value})
        .then(result => {
            this.data=result;
        })
        .catch(error=> {

        })
        }
    
}