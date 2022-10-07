import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comments/comment.module';
import { CommentService } from './comments/comment.service';
import { CommentsController } from './comments/comments.controller';

@Module({
  imports: [CommentModule],
  controllers: [AppController, CommentsController],
  providers: [AppService, CommentService],
})
export class AppModule {}
