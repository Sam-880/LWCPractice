import { LightningElement, track, wire } from 'lwc';
import FetchAccountsInfoIndustry from '@salesforce/apex/FetchAccountsInfo.FetchAccountsInfoIndustry';
const columns = [
    { label: 'Name', fieldName:'Name', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Industry', fieldName:'Industry', editable: true },
    { label: 'Active Status', fieldName: 'Active__c', editable: true },   
];
export default class AccountDataByIndustry extends LightningElement {
    @track columns=columns;
    @track data=[];
    accByIndustry;
    accountHandler(event) {
        this.accByIndustry = event.target.value;
        //console.log('We are Here '+ this.accByIndustry);
    }

    @wire(FetchAccountsInfoIndustry,{IndustryValue: '$accByIndustry'})
    accountLst({data,error}){
        if(data){
            this.data=data;
        }
        if(error){
            console.log('Error Message');
        }
    }
}