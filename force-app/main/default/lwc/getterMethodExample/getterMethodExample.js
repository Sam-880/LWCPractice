import { LightningElement } from 'lwc';

export default class GetterMethodExample extends LightningElement {


    firstNumber=20;
    secondNumber=30;
    arrey=['Rahul','Samir','Pravin'];
    //players=['Rahul','Virat','Hardik','Sachin','Rishubh'];
    team=[
        {
            Name:"Rahul",
            Age:32,
            Runs:220
        },
        {
            Name:"Virat",
            Age:26,
            Runs:290
        },
        {
            Name:"Hardik",
            Age:29,
            Runs:230
        },
        {
            Name:"Sachin",
            Age:40,
            Runs:210
        },
        {
            Name:"Rishubh",
            Age:32,
            Runs:200
        }
    ]
    get accessElecemt(){
       return this.arrey[1];
    }

    get manupulation(){
        return this.firstNumber * this.secondNumber;
    }
}