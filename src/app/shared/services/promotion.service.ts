import { Injectable } from '@angular/core';
import { Promotion } from '../promotion';
import storage from '../storage';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(storage.promotions());
  }

  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(storage.promotions().filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(storage.promotions().filter((promotion) => promotion.featured)[0]);
  }

  getFeaturedPromotions(): Promise<Promotion[]> {
    return Promise.resolve(storage.promotions().filter((promotion) => promotion.featured));
  }

}
