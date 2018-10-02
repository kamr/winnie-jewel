// EACH PRODUCT:
// NAME, DESC, TYPE, COLLECTION, PRICE

const data = {
  collections: ['seasons', 'starsign', 'kamran', 'test'],
  products: [
    {
      "id": 1,
      "name": "summer necklace",
      "description": "summer necklace desc",
      "type": "necklace",
      "collection": "seasons",
      "price": 100,
      "image": "../images/earrings.jpg"
    },
    {
      "id": 2,
      "name": "winter necklace",
      "description": "winter necklace desc",
      "type": "necklace",
      "price": 100,
      "collection": "seasons"
    },
    {
      "id": 3,
      "name": "winter earrings",
      "description": "winter earrings desc",
      "type": "earrings",
      "price": 50,
      "collection": "seasons"
    },
    {
      "id": 4,
      "name": "aries necklace",
      "description": "aries necklace descr",
      "type": "necklace",
      "price": 80,
      "collection": "starsign"
    }
  ]
}

// export default data
module.exports = data;
