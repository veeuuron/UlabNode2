import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentService) {}

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', new ParseIntPipe()) id: number) {
    return this.commentsService.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.commentsService.create(body);
  }

  @Put(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() body: any) {
    return this.commentsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    this.commentsService.delete(id);
  }
}
