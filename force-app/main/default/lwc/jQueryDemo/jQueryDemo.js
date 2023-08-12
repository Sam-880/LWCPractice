/**
 * @description         :
 * @auther              : Samir Dhapke
 * @group               : 22-02-2023
 * @last modified on    :
 * @last modified by    : Samir Dhapke
 */

import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import Jquery from '@salesforce/resourceUrl/Jquery';

export default class JQueryDemo extends LightningElement {
    renderedCallback() {
        loadScript(this, Jquery)
            .then(() => {
                console.log('Jquery Loaded');
            })
            .catch(error => {
                console.log('failed to load Jquery' + error);
            })
    }
    slideIt(event){
        $(this.templete.querSelector('.panel')).slideToggle('slow');
        $(this.templete.querSelector('.para')).addlass('important');
    }
    slideright(event){
        $(this.templete.querSelector('.innerDiv')).animate({left:'205px'});
    }
}