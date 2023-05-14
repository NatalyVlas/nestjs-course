import { Controller, Put, Header, Param, Headers, Req } from '@nestjs/common';
import { CalcService } from './calc.service';
import { Request } from 'express';

@Controller('calc')
export class CalcController {
    constructor(private readonly calcService: CalcService) {}

// @Put()
// @Header('Type-Operation', 'plus, minus, multiply')
// create(): string {
//     return 'Создали заголовок';
// }
    
@Put('/:a/:b')
// @Header('Type-Operation', 'plus, minus, multiply')
// getResult(@Param('a') a: string, @Param('b') b: string, @Req() request: Request): number | string {
    getResult(@Param('a') a: string, @Param('b') b: string): number {    
const aInt = parseInt(a);
    const bInt = parseInt(b);
    // const operator = request.headers['value'];
    console.log(aInt, bInt, operator);
    return this.calcService.getResult(aInt, bInt, operator);
}


}
