import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {StorageService} from '../shared/services/storage.service';
import {DishDetail} from '../shared/dish.detail';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [StorageService]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;
  selectedDishDetails: DishDetail;

  onSelectDish(dish: Dish): void {
    this.selectedDish = dish;
    this.selectedDishDetails = this.storageService.findDishDetail(this.selectedDish.id);
  }

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.findAllDishes()
      .then(dishes => {this.dishes = dishes; this.selectedDish = this.dishes[0]})
      .catch(error => console.error(error.message));
  }
}
