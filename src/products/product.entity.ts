// src/products/product.entity.ts

import {  Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { Picture } from './picture.entity';

@Entity()
export class Product {
    // id will be primary key and will be auto generated
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column({ length: 50 })
    sku: string;

    @Column('int')
    stock: number;
    
    // pinned will be true or false
    @Column("boolean", { default: false })
    pinned: boolean;

    // position will be unique

    @Column("int", {nullable: true, unique: true})
    position: number;

    @Column('text')
    imgSrc: string;

    @OneToMany(() => Picture, picture => picture.product)
    pictures: Picture[];
}

