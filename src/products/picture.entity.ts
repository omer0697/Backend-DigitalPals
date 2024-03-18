import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    url: string;

    @ManyToOne(() => Product, product => product.pictures)
    product: Product;

    @Column()
    productId: number;
}