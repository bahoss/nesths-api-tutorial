import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService) {}

    getBookmarks(userId: number) {
        
    }
 
    getBookmarkById(userId: number, bookmarkId: number) {
        
    }

    editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {
        
    }

    createBookmark(userId: number, dto: CreateBookmarkDto) {
        
    }

    deleteBookmarkById(userId: number, bookmarkId: number) {
        
    }
}
