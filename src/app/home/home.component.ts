import { Component, OnInit } from '@angular/core';
import {StorageService} from '../shared/services/storage.service';
import {PromotionService} from '../shared/services/promotion.service';
import {Dish} from '../shared/dish';
import {Promotion} from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private storageService: StorageService,
              private promotionService: PromotionService) { }

  ngOnInit() {
    this.storageService.getFeaturedDish().then(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion().then(promo => this.promotion = promo);
  }

}
