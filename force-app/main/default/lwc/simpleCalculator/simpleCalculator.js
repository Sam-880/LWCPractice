import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
firstNumber;
secoundNumber;
result;
firstNumberHandler(event){
    console.log('Inside first Number Method');
    this.firstNumber=event.target.value;
    console.log('value of the firstNumber '+this.firstNumber);
      }


secondNumberHandler(event){
        console.log('Inside first Number Method');
        this.secoundNumber=event.target.value;
        console.log('value of the secondNumber '+this.secoundNumber);
    }

    handleClick(event){
        this.result=Number(this.firstNumber)+Number(this.secoundNumber);
        
    }   
}