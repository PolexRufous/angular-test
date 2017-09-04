import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Dish} from '../dish';
import {DishDetail} from '../dish.detail';
import {Observable} from 'rxjs/Observable';
import {baseUrl} from '../base.url';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import storage from "../storage";

@Injectable()
export class StorageService {
  constructor(private http: Http,
              private processHttpMsgService: ProcessHTTPMsgService) {}

  findAllDishes(): Observable<Array<Dish>> {
    return this.http.get(baseUrl + 'dishes')
      .map(res => this.processHttpMsgService.extractData(res));
  }
  findDishDetail(dishId: number): Observable<DishDetail> {
    return Observable.of(storage.dishDetail(dishId)).delay(2000);
  }
  getDish(id: number): Observable<Dish> {
    return this.http.get(baseUrl + 'dishes/' + id)
      .map(res => this.processHttpMsgService.extractData(res));
  }
  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseUrl + 'dishes?featured=true')
      .map(res => this.processHttpMsgService.extractData(res)[0]);
  }

  getDishesIds(): Observable<Array<number>> {
    return this.findAllDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }
}
