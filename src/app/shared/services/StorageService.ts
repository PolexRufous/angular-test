import { Injectable } from '@angular/core';
import storage from '../storage';
import {Dish} from '../dish';

@Injectable()
export class StorageService {
  findAllDishes(): Promise<Array<Dish>> {
    return Promise.resolve(storage.dishes());
  }
  findDishDetail(dishId: number) {
    return storage.dishDetail(dishId);
  }
}
