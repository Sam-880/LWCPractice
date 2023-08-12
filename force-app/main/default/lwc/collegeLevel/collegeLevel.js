import { api, LightningElement } from 'lwc';

export default class CollegeLevel extends LightningElement {
   @api status="Pending Status by College";
@api collegeInformation;

}