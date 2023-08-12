import { LightningElement } from 'lwc';

export default class ConditionalTempleteExample extends LightningElement {
    statusOfCheckbox = false;

    checkBoxHandler(event) {
        this.statusOfCheckbox = true;
    }

    clickHere = false;
    clickMeHnadler = (event) => {
        this.clickHere = true;
    }

    //iterator Example
    students = [
        {
            rollNmber: 1,
            name: "Raju",
            age: 23
        },
        {
            rollNmber: 2,
            name: "Nikhil",
            age: 24
        },
        {
            rollNmber: 3,
            name: "Saurabh",
            age: 25
        }

    ];
}