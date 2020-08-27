import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categorie } from './entity/categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categorieService: CategoriesService
    ) {}

  @Get()
  index(): Promise<Categorie[]> {
    return this.categorieService.findAll();
  }

  @Post()
  async create(@Body() categorieData: Categorie): Promise<any> {
    return this.categorieService.create(categorieData);
  }
 }
