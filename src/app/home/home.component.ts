import {Component, Inject, OnInit} from '@angular/core';
import {StorageService} from '../shared/services/storage.service';
import {PromotionService} from '../shared/services/promotion.service';
import {Dish} from '../shared/dish';
import {Promotion} from '../shared/promotion';
import {Leader} from '../shared/leader';
import {LeadersService} from '../shared/services/leaders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishImgUrl: string;

  constructor(private storageService: StorageService,
              private promotionService: PromotionService,
              private leaderService: LeadersService,
              @Inject('BaseUrl') private BaseUrl: string) { }

  ngOnInit() {
    this.storageService.getFeaturedDish().subscribe(dish => {this.dish = dish; this.dishImgUrl = this.BaseUrl + dish.image});
    this.promotionService.getFeaturedPromotion().then(promo => this.promotion = promo);
    this.leaderService.getFeaturedLeader().then(leader => this.leader = leader);
  }

}
