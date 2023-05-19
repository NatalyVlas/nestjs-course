import { Controller, Get, Param, Post, Body, Delete, Req, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { News, NewsService } from './news.service';
import { CommentsService } from './comments/comments.service';
import { renderNewsAll } from '../view/news/news-all';
import { renderTemplate } from '../view/template';
import { renderNews } from '../view/news/news';

@Controller('news')
export class NewsController {
constructor(private readonly newsService: NewsService,
    private readonly commentsService: CommentsService) {}

    @Get('/api/detail/:id')
    get(@Param('id') id: string): News {
        const idInt = parseInt(id);
        const news = this.newsService.find(idInt);
        const comments = this.commentsService.find(idInt);
        return {
            ...news,
            comments,
        }
    }

    @Get('/api/all')
    getAll(): News[] {
       return this.newsService.getAll();
      }

    @Get('/all')
    getAllView() {
        const news = this.newsService.getAll();
        const content = renderNewsAll(news);
        return renderTemplate(content, {title: 'News List', description: 'The most amazing news in the world!'});
    }

    @Get(':id/detail')
    getNewsView(@Param('id') id: string): string {
      const idInt = parseInt(id);
      const news = this.newsService.find(idInt);
      const comments = this.commentsService.find(idInt);
  
      const content = renderNews(news, comments);
      return renderTemplate(content, {
        title: news.title,
        description: news?.description,
      });
    }

    @Post('/api')
    create(@Body() news: News): News {
        return this.newsService.create(news);
    }

    @Delete('/api/:id')
    remove(@Param('id') id: string): string {
        const idInt = parseInt(id);
        const isRemove = this.newsService.remove(idInt);
        return isRemove ? 'Новость удалена' : 'Передан неверный идентификатор';
    }

    @Post('/api/:id')
    @HttpCode(200)
    change(@Param('id') id: string, @Body() news: News): News {
    const idInt = parseInt(id);
    return this.newsService.change(idInt, news);
    }
}
   