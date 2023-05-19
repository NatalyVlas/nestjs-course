import { Controller, Param, Post, Body, Get, Delete, Patch } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.service';

@Controller('comments')
export class CommentsController {
   constructor(private readonly commentsService: CommentsService) {}

   @Post('/api/:idNews')
   create(@Param('idNews') idNews: string, @Body() comment: Comment) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.create(idNewsInt, comment);
   }

   @Get('/api/details/:idNews')
   get(@Param('idNews') idNews: string) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.find(idNewsInt);
   }

   @Patch('api/:idNews/:idComment')
   edit(
     @Param('idNews') idNews: string,
     @Param('idComment') idComment: string,
     @Body('message') message: string,
   ) {
     const idNewsInt = parseInt(idNews);
     const idCommentInt = parseInt(idComment);
     return this.commentsService.change(idNewsInt, idCommentInt, message);
   }

   @Delete('/api/details/:idNews/:idComment')
   remove(
    @Param('idNews') idNews: string,
    @Param('idComment') idComment: string
   ) {
    const idNewsInt = parseInt(idNews);
    const idCommentInt = parseInt(idComment);
    return this.commentsService.remove(idNewsInt, idCommentInt)
   }

}