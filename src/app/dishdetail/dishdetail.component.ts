import { Component, OnInit, Input } from '@angular/core';

import { DishDetail } from '../shared/dish.detail';
import {Dish} from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../shared/services/storage.service'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishDetail: DishDetail;
  constructor(private storageService: StorageService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.storageService.getDish(id).subscribe(dish => this.dish = dish);
    this.storageService.findDishDetail(id).subscribe(dishDetail => this.dishDetail = dishDetail);
  }

  goBack(): void {
    this.location.back();
  }
}
