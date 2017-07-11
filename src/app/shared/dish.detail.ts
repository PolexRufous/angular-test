import {Dish} from './dish';
import {DishComment} from './dish.comment';

export class DishDetail {
  dish: Dish;
  comments: Array<DishComment>;
}
