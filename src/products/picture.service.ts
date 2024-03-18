import { Injectable } from '@nestjs/common';
import { Picture } from './picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm';


// src/pictures/picture.service.ts


@Injectable()
export class PictureService {
    constructor(
        @InjectRepository(Picture)
        private pictureRepository: Repository<Picture>,
    ) {}

    findOne(options: FindOneOptions<Picture>): Promise<Picture> {
        return this.pictureRepository.findOne(options);
    }

    findAll(): Promise<Picture[]> {
        return this.pictureRepository.find();
    }

    create(pictureData: Partial<Picture>): Promise<Picture> {
        const picture = this.pictureRepository.create(pictureData);
        return this.pictureRepository.save(picture);
    }

    update(id: number, pictureData: Partial<Picture>): Promise<Picture> {
        return this.pictureRepository.save({ id, ...pictureData });
    }

    async remove(id: number): Promise<void> {
        await this.pictureRepository.delete(id);
    }

}