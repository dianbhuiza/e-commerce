import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class MainPopularUse {
    @Column({ type: 'boolean' })
    culinary: boolean;
    
    @Column({ type: 'boolean' })
    medicinal: boolean;
    
    @Column({ type: 'boolean' })
    aromatic: boolean;
}

export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'varchar', length: 255 })
  name: string;
  
  @Column({ type: 'varchar', length: 255 })
  commonName: string;
  
  @Column({ type: 'varchar', length: 255 })
  scientificName: string;
  
  @Column({ type: 'varchar', length: 255 })
  genus: string;
  
  @Column({ type: 'varchar', length: 255 })
  family: string;
  
  @Column({ type: 'varchar', length: 255 })
  growthForm: string;
  
  @Column({ type: 'varchar', length: 255 })
  origin: string;
  
  @Column({ type: 'varchar', length: 255 })
  provenance: string;
  
  @Column({ type: 'varchar', length: 255 })
  collector: string;
  
  @Column({ type: 'varchar', length: 255 })
  threatCategory: string;
  
  @Column({ type: 'boolean' })
  isEndemic: boolean;
  
  @Column({ type: 'integer' })
  population: number;
  
  @Column({ type: 'date' })
  registrationDate: Date;
  
  @Column({ type: 'date' })
  deathDate: Date;

  @Column(() => MainPopularUse)
  mainPopularUse: MainPopularUse;
}
