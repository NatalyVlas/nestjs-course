import { Controller, Get, Param, Post, Body, Delete, Req, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { News, NewsService } from './news.service';
import { Request, Response } from 'express';

@Controller('news')
export class NewsController {
constructor(private readonly newsService: NewsService) {}

    @Get('/new/:id')
    get(@Param('id') id: string): News {
        const idInt = parseInt(id);
        return this.newsService.find(idInt);
    }

    @Get('/all')
    getAll(): News[] {
       return this.newsService.getAll();
      }

    @Post()
    create(@Body() news: News): News {
        return this.newsService.create(news);
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        const idInt = parseInt(id);
        const isRemove = this.newsService.remove(idInt);
        return isRemove ? 'Новость удалена' : 'Передан неверный идентификатор';
    }

    @Post('/:id')
    @HttpCode(200)
    change(@Param('id') id: string, @Body() news: News): News {
    const idInt = parseInt(id);
    return this.newsService.change(idInt, news);
    }
}
    // getAll(@Req() req: Request, @Res() res: Response) {
    //     const allNews = this.newsService.getAll();
    //     return
    //     if (allNews === undefined) {
    //        res.status(200).end('Новостей нет');
    //     } else {
    //        res.status(200).end('Список новостей') 
    //     }
    //   }
   