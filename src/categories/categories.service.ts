import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entity/categories.entity';
import { Repository } from 'typeorm'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}
  
  async findAll(): Promise<Categorie[]> {  
    return await this.categorieRepository.find();
  }

  async create(categorie: Categorie): Promise<Categorie> {
    return await this.categorieRepository.save(categorie);
  }
}
