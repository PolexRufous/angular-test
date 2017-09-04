import {Component, OnInit, Inject} from '@angular/core';
import {Dish} from '../shared/dish';
import {StorageService} from '../shared/services/storage.service';
import {DishDetail} from '../shared/dish.detail';
import {LeadersService} from '../shared/services/leaders.service';
import {Leader} from '../shared/leader';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [StorageService]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;
  leaders: Array<Leader>;

  constructor(private storageService: StorageService,
              private leaderService: LeadersService,
              @Inject('BaseUrl') private BaseUrl) { }

  ngOnInit() {
    this.storageService.findAllDishes()
      .subscribe(dishes => {
        this.dishes = dishes;
        this.selectedDish = this.dishes[0];
        dishes.forEach(dish => dish.image = this.BaseUrl + dish.image);
      });
    this.leaderService.getLeaders()
      .then(leaders => this.leaders = leaders)
      .catch(error => console.error(error.message));
  }
}
