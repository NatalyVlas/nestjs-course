import { Controller, Get, Param, Headers } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
    constructor(private readonly calcService: CalcService) {}
    
@Get('/:a/:b')
    getResult(
        @Param('a') a: string,
        @Param('b') b: string,
        @Headers('Type-Operation') operation: string
    ) {    
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    console.log(aInt, bInt, operation);
    return this.calcService.getResult(aInt, bInt, operation);
}
}
