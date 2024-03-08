import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false })
  country: string;
}
