import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcService {
   
    getResult(a: number, b: number, operation: string): number | string {
        if (operation === 'plus') {
            return a + b;
        } else if (operation === 'minus') {
            return a - b;
        } else if (operation === 'multiply') {
            return a * b;
        } else {
            return 'Введите правильные параметры'
        }    
    }
}
