import { Injectable } from '@angular/core';
import storage from '../storage';
import {Dish} from '../dish';
import {DishDetail} from "../dish.detail";

@Injectable()
export class StorageService {
  constructor() {}

  findAllDishes(): Promise<Array<Dish>> {
    return Promise.resolve(storage.dishes());
  }
  findDishDetail(dishId: number): Promise<DishDetail> {
    return Promise.resolve(storage.dishDetail(dishId));
  }
  getDish(id: number): Promise<Dish> {
    return Promise.resolve(storage.dishes().filter(dish => dish.id === id)[0]);
  }
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(storage.dishes().filter(dish => dish.featured)[0]);
  }
  getFeaturedDishes(): Promise<Array<Dish>> {
    return Promise.resolve(storage.dishes().filter(dish => dish.featured));
  }
}
