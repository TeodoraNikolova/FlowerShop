import { ColorTypes, FlowerTypes, ProductTypes } from '../utilis/common.js'

const products = [
  {
    name: 'Flower Arrangment Dunes',
    image: '/images/1.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 59.99,
    rating: 4.5,
    numReviews: 12,
    tags: {
      colors: [ColorTypes.PINK],
      flowers: [FlowerTypes.ROSE],
      type: ProductTypes.BOX,
    },
  },
  {
    name: 'Flower Arrangment Lily Bouquet',
    image: '/images/2.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 39.99,
    rating: 4.0,
    numReviews: 8,
    tags: {
      colors: [ColorTypes.PINK],
      flowers: [FlowerTypes.ROSE],
      type: ProductTypes.BOX,
    },
  },
  {
    name: 'Flower Arrangment Summer',
    image: '/images/3.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 49.99,
    rating: 3,
    numReviews: 12,
    tags: {
      colors: [ColorTypes.YELLOW],
      flowers: [FlowerTypes.CHRYSANTHEMUMS],
      type: ProductTypes.TOY,
    },
  },
  {
    name: 'Flower Arrangment Basic',
    image: '/images/4.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 39.99,
    rating: 5,
    numReviews: 12,
    tags: {
      colors: [ColorTypes.YELLOW],
      flowers: [FlowerTypes.CHRYSANTHEMUMS],
      type: ProductTypes.WOOD,
    },
  },
  {
    name: 'Flower Arrangment Beautiful',
    image: '/images/5.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 49.99,
    rating: 3.5,
    numReviews: 10,
    tags: {
      colors: [ColorTypes.WHITE],
      flowers: [FlowerTypes.CHRYSANTHEMUMS],
      type: ProductTypes.WOOD,
    },
  },
  {
    name: 'Flower Arrangment Daydream Bouquet',
    image: '/images/6.jpg',
    description: 'Gathering of pink, orange and lavender roses',
    category: 'Arrangments',
    price: 29.99,
    rating: 4,
    numReviews: 12,
    tags: {
      colors: [ColorTypes.PINK],
      flowers: [FlowerTypes.ROSES],
      type: ProductTypes.BOX,
    },
  },
]

export default products
