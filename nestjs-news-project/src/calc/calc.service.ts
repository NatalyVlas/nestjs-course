import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcService {
   
    getResult(a: number, b: number, operator: string): number | string {
        if (operator === 'plus') {
            return a + b;
        } else if (operator === 'minus') {
            return a - b;
        } else if (operator === 'multiply') {
            return a * b;
        } else {
            return 'Введите правильные параметры'
        }    
    }
}
