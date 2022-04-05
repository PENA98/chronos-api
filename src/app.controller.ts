import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('file',{ 
    storage: diskStorage({
      destination: './public',
      filename: (req, file, cb) => {
        console.log(file);
        const filename: string =file.originalname.replace(/\s/g, '-');
        const uniqueFileName: string = uuidv4() + '-' + filename;

        cb(null,uniqueFileName);
        
      }
    })
  }))
  uploadImage(@UploadedFile() file, ): Observable<Object> {
    console.log(file);
    return of({ imagePath: file.path})
  } 
}
