import { Dish } from './dish';
import { DishComment } from './dish.comment';
import { DishDetail } from './dish.detail';
import {Promotion} from './promotion';

const DISHES: Array<Dish> = [
  {
    id: 1,
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza.',
    featured: true
  },
  {
    id: 2,
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    featured: false
  },
  {
    id: 3,
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    featured: false
  },
  {
    id: 4,
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    featured: false
  }
];

const COMMENTS: Array<DishComment> = [
  {
    id: 1,
    comment: 'Nice dish',
    author: 'Mickey Mouse',
    date: new Date(2011, 11, 1),
    stars: 4
  },
  {
    id: 2,
    comment: 'Very tasty',
    author: 'Donald Duck',
    date: new Date(2012, 5, 7),
    stars: 3
  },
  {
    id: 3,
    comment: 'Delicious meal',
    author: 'Tom Cat',
    date: new Date(2017, 4, 7),
    stars: 3
  }
];

const DISH_COMMENT = [
  {dish: 1, comment: 1},
  {dish: 2, comment: 2},
  {dish: 2, comment: 3}
];


class Storage {
  dishDetail(dishId: number): DishDetail  {
    const currDish = DISHES.find(dish => dish.id === dishId);
    const comments = this.comments(dishId);
    const dishDetail = new DishDetail();
    dishDetail.dish = currDish;
    dishDetail.comments = comments;
    return dishDetail;
  }

  dishes(): Dish[] {
    return DISHES;
  }

  promotions(): Promotion[] {
    return PROMOTIONS;
  }

  private comments(dishId: number): Array<DishComment> {
    return DISH_COMMENT.filter(dish_comment => dish_comment.dish === dishId)
      .map(dish_comment => COMMENTS.find(comment => comment.id === dish_comment.comment));
  }
}

const PROMOTIONS: Promotion[] = [
  {
    id: 0,
    name: 'Weekend Grand Buffet',
    image: '/assets/images/buffet.png',
    label: 'New',
    price: '19.99',
    featured: true,
    description: 'Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }
];

const storage = new Storage();
export default storage;
