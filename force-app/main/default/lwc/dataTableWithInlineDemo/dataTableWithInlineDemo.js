import { LightningElement, wire } from 'lwc';
import getCricketList from '@salesforce/apex/InlineDataTableDemo.getCricketList';
import updateCricketersList from '@salesforce/apex/InlineDataTableDemo.updateCricketersList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Players Nationality', fieldName: 'Nationality__c', editable: true },
    { label: 'Players Runs', fieldName: 'Runs__c', editable: true }
];

export default class DataTableWithInlineDemo extends LightningElement {


    columns = columns;
    data = [];

    @wire(getCricketList)
    getCricketers({ data, error }) {
        if (data) {
            this.data = data;
        }
        else if (error) {
            console.log('error==>' + error);
        }
    }

    handleSave(event) {
        const updatedField = event.detail.draftValues;
        console.log('updatedField==>' + JSON.stringify(updatedField));

        updateCricketersList({ playersData: updatedField })
            .then(result => {
                //console.log('Apex Result ==>' + JSON.stringify(result));
                this.dispatchEvent(new ShowToastEvent({
                    title: result,
                    message: 'Players Record is Updated',
                    variant: 'success'
                })
                );
            })
            .catch(error => {
                console.log('Apex Result error ==>' + JSON.stringify(error));
            })
    }
}