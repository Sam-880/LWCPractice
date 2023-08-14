import { LightningElement, track } from 'lwc';
import getContactDetail from '@salesforce/apex/GetChild.getContactDetail';
export default class TreeGridDemo extends LightningElement {
    @track gridColumns = [
        {
            type: 'text',
            fieldName: 'Name',
            label: 'Name'
        },
        {
            type: 'text',
            fieldName: 'FirstName',
            label: 'First Name'
        },
        {
            type: 'text',
            fieldName: 'LastName',
            label: 'Last Name'
        },

    ];

    @track gridData;

    connectedCallback() {
        getContactDetail()
            .then(result => {
                //console.log('result==>' + JSON.stringify(result));
                //just copy of Result
                var tempContact = JSON.parse(JSON.stringify(result));
                //console.log('tempContact==>' + JSON.stringify(tempContact));
                for (var i = 0; i < tempContact.length; i++) {
                    var newContact = tempContact[i]['Contacts'];
                    // console.log('newContact==>' + JSON.stringify(newContact));
                    if (newContact) {
                        // remove contacts and add acontact as child
                        tempContact[i]._children = newContact;
                        delete tempContact[i].Contacts;
                    }

                }
                this.gridData = tempContact;
                // console.log('this.gridData==>' + JSON.stringify(this.gridData));
            })
            .catch(error => {
                console.log('Result error ==>' + JSON.stringify(error));
            })
    }

    getSelectedRow(event) {
        let selectedRows = event.detail.selectedRows;
        // window.alert(JSON.stringify(selectedRows));
        //console.log('selectedRows ==>' + JSON.stringify(selectedRows));
    }
}