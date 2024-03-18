// src/pictures/pictures.controller.ts

// crud operations for pictures
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PictureService } from './picture.service';
import { Picture } from './picture.entity';

@Controller('pictures')
export class PicturesController {
    constructor(private readonly pictureService: PictureService) {}

    @Get()
    getAllPictures(): Promise<Picture[]> {
        return this.pictureService.findAll();
    }

    @Get(':id')
    getPictureById(@Param('id') id: number): Promise<Picture> {
        return this.pictureService.findOne({ where: { id } });
    }

    @Post()
    createPicture(@Body() picture: Picture): Promise<Picture> {
        return this.pictureService.create(picture);
    }

    @Patch(':id')
    updatePicture(@Param('id') id: number, @Body() picture: Picture): Promise<Picture> {
        return this.pictureService.update(id, picture);
    }

    @Delete(':id')
    deletePicture(@Param('id') id: number): Promise<void> {
        return this.pictureService.remove(id);
    }
}