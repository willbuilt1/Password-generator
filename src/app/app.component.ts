import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  length = 0;

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    } 
  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols
  }

  onButtonClick(){
    let validChars = '';
    const numbers = '1234567890'
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@£$^&*()'

    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i =0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
