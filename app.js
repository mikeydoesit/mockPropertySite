let properties = [
  {
    type: 'house',
    price: 1100000,
    bedrooms: 8,
    garden: true,
    parking: true,
    pool: false,
    thumbnail: 'https://i.ebayimg.com/00/s/NzEyWDk1OQ==/z/2iEAAOSwrFxbWGda/$_86.JPG'

  },
  {
    type: 'house',
    price: 137950,
    bedrooms: 3,
    garden: true,
    parking: true,
    pool: false,
    thumbnail: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/QhMAAOSwQzJb7vnL/$_86.JPG'

  },
  {
    type: 'flat',
    price: 69995,
    bedrooms: 2,
    garden: false,
    parking: false,
    pool: false,
    thumbnail: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/wDAAAOSwEDtbl6Fp/$_86.JPG'

  }
];

for (let property in properties) {
  let resultsDisplay = document.querySelector('.results');
  let propertyCard = document.createElement('div');
  let thumbnail = document.createElement('img');
  propertyCard.setAttribute('class', 'propertyCardWrapper');
  thumbnail.setAttribute('src', properties[property].thumbnail);
  propertyCard.appendChild(thumbnail);
  resultsDisplay.appendChild(propertyCard)

}
