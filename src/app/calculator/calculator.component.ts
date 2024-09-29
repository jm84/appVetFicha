import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentInput: string = '';
  result: number = 0;

  appendNumber(number: string) {
    this.currentInput += number;
  }

  appendOperator(operator: string) {
    if (this.currentInput && !this.isOperator(this.currentInput.slice(-1))) {
      this.currentInput += operator;
    }
  }

  isOperator(char: string): boolean {
    return ['+', '-', '*'].includes(char);
  }

  calculate() {
    try {
      this.result = eval(this.currentInput);
      this.currentInput = this.result.toString();
    } catch (e) {
      this.result = 0;
      this.currentInput = '';
    }
  }

  clear() {
    this.currentInput = '';
    this.result = 0;
  }
}
