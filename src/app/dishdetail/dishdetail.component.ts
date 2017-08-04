import { Component, OnInit, Input } from '@angular/core';

import { DishDetail } from '../shared/dish.detail';
import {Dish} from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../shared/services/storage.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishDetail: DishDetail;
  dishesIds: Array<number>;
  previous: number;
  next: number;

  constructor(private storageService: StorageService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.storageService.getDishesIds().subscribe(
      (ids: Array<number>) => this.dishesIds = ids
    );
    this.route.params
      .switchMap((params: Params) => this.storageService.getDish(+params['id']))
      .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
    this.route.params
      .switchMap((params: Params) => this.storageService.findDishDetail(+params['id']))
      .subscribe(dishDetail => this.dishDetail = dishDetail);
  }

  setPrevNext(dishId: number) {
    const index = this.dishesIds.indexOf(dishId);
    this.previous = this.dishesIds[(this.dishesIds.length + index - 1) % this.dishesIds.length];
    this.next = this.dishesIds[(this.dishesIds.length + index + 1) % this.dishesIds.length];
  }

  goBack(): void {
    this.location.back();
  }
}
