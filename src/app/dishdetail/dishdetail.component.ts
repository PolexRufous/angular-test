import { Component, OnInit, Input } from '@angular/core';

import { DishDetail } from '../shared/dish.detail';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input() dish: Dish;
  @Input() dishDetail: DishDetail;
  constructor() {
  }

  ngOnInit() {
  }

}
