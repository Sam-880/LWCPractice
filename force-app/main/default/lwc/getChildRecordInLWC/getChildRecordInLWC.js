import { LightningElement, api } from 'lwc';
import getOpportunityReatedAccount from '@salesforce/apex/GetContactOpportunityDetails.getOpportunityReatedAccount';

//Declaring columns for child Opportunity
const columns1 = [
    { label: "Opportunity Id", fieldName: "Id" },
    { label: "Opportunity Name", fieldName: "Name" }
];

//Declaring columns for child Contact
const columns2 = [
    { label: "Contact Id", fieldName: "Id" },
    { label: "Contact Name", fieldName: "Name" }
];
export default class GetChildRecordInLWC extends LightningElement {

    @api buttonLabel = "Show";
    opportunityData = []; // this array store child opportunity record
    contactData = []; // this array store child Contact record

    columns1 = columns1;
    columns2 = columns2;

    @api recordId; // this property will store current account Id
    @api showDataTable = false;

    opportunityTempArray = [];
    contactTempArray = [];

    // this method will call when user click on the button
    handleShow(event) {
        // If the user click the show button then datatable will be visible and button will become Hide
        if (event.target.label == "Show") {
            this.buttonLabel = "Hide";
            this.showDataTable = true;

        }
        // If the user click the show button then datatable will be Invisible and button will become Show
        else if (event.target.label == "Hide") {
            this.buttonLabel = "Show";
            this.showDataTable = false;
        }
    }

    connectedCallback() {
        // calling apex method by passing record id
        getOpportunityReatedAccount({ recrdId: this.recordId })
            .then(res => {
                let tempRecord = res;
                console.log('tempRecord==>' + JSON.stringify(tempRecord));

                // create two object to store Opportunities and contacts
                let temp = tempRecord.map(row => {
                    return Object.assign({ OppName: row.Opportunities, ContactName: row.Contacts })
                })
                console.log('temp==>' + JSON.stringify(temp));

                //store opportunity and contacts in different Array
                temp.forEach(element => {
                    //Opportunity Array
                    this.opportunityTempArray = element.OppName;
                    console.log('this.opportunityTempArray==>' + JSON.stringify(this.opportunityTempArray));

                    //Contact ARray
                    this.contactTempArray = element.ContactName;
                    console.log('this.contactTempArray==>' + JSON.stringify(this.contactTempArray));

                    //data for the Opportunity Datatable
                    this.opportunityData = this.opportunityTempArray;

                    //data for the Contacts Datatable
                    this.contactData = this.opportunityTempArray;
                });

            })
            .catch(error => {
                console.error('temp==>' + JSON.stringify(temp));
            })
    }

}