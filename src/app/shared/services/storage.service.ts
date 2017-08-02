import { Injectable } from '@angular/core';
import storage from '../storage';
import {Dish} from '../dish';
import {DishDetail} from '../dish.detail';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';

@Injectable()
export class StorageService {
  constructor() {}

  findAllDishes(): Observable<Array<Dish>> {
    return Observable.of(storage.dishes()).delay(2000);
  }
  findDishDetail(dishId: number): Observable<DishDetail> {
    return Observable.of(storage.dishDetail(dishId)).delay(2000);
  }
  getDish(id: number): Observable<Dish> {
    return Observable.of(storage.dishes().filter(dish => dish.id === id)[0]).delay(2000);
  }
  getFeaturedDish(): Observable<Dish> {
    return Observable.of(storage.dishes().filter(dish => dish.featured)[0]).delay(2000);
  }
  getFeaturedDishes(): Promise<Array<Dish>> {
    return Promise.resolve(storage.dishes().filter(dish => dish.featured));
  }
}
