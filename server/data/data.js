// EACH PRODUCT:
// NAME, DESC, TYPE, COLLECTION, PRICE

const data = {
  collections: ['seasons', 'starsign', 'kamran', 'test'],
  products: {
    "seasons": [
      {
        "id": 1,
        "name": "summer necklace",
        "description": "summer necklace desc",
        "type": "necklace",
        "price": 100
      },
      {
        "id": 2,
        "name": "winter necklace",
        "description": "winter necklace desc",
        "type": "necklace",
        "price": 100
      },
      {
        "id": 3,
        "name": "winter earrings",
        "description": "winter earrings desc",
        "type": "earrings",
        "price": 50
      }
    ],
    "starsign": [
      {
        "id": 4,
        "name": "aries necklace",
        "description": "aries necklace descr",
        "type": "necklace",
        "price": 80
      }
    ]
  }
}

// export default data
module.exports = data;
