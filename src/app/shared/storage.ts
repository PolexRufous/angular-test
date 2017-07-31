import { Dish } from './dish';
import { DishComment } from './dish.comment';
import { DishDetail } from './dish.detail';
import { Promotion } from './promotion';
import { Leader } from './leader';

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

const LEADERS = [
  {
    id: 0,
    name: 'Peter Pan',
    image: '/assets/images/alberto.png',
    designation: 'Chief Epicurious Officer',
    abbr: 'CEO',
    featured: false,
    description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
  },
  {
    id: 1,
    name: 'Dhanasekaran Witherspoon',
    image: '/assets/images/alberto.png',
    designation: 'Chief Food Officer',
    abbr: 'CFO',
    featured: false,
    description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
  },
  {
    id: 2,
    name: 'Agumbe Tang',
    image: '/assets/images/alberto.png',
    designation: 'Chief Taste Officer',
    abbr: 'CTO',
    featured: false,
    description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
  },
  {
    id: 3,
    name: 'Alberto Somayya',
    image: '/assets/images/alberto.png',
    designation: 'Executive Chef',
    abbr: 'EC',
    featured: true,
    description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
  }
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

  leaders(): Array<Leader> {
    return LEADERS;
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
