/*
TODO: 
- The name, img, and click count will load dynamically 
  only when the name of car is clicked.
- each car will keep count of its vote
*/


//Helpers
const carImg = document.getElementById('car-img');
const carList = document.getElementById('car-list');
const carCount = document.getElementById('car-count');


const cars = [
  {name: 'Maserati', imgSrc: './img/black-convertible-coupe.jpg', clicks: 0},
  {name: 'Camero', imgSrc: './img/chevrolet-camaro.jpg', clicks: 0},
  {name: 'Charger', imgSrc: './img/dodge-charger.jpg', clicks: 0},
  {name: 'Mustang', imgSrc: './img/ford-mustang.jpg', clicks: 0},
  {name: 'Benz', imgSrc: './img/mercedes-benz.jpg', clicks: 0},
];

let currentCar = null;
currentCar = cars[0];


// Picks a car at random
function randomCar() {
  return cars[Math.floor(Math.random() * cars.length)];
};


// Check that a image is loaded 
function checkSRC() {
  if(carImg.getAttribute('src') == "")
  {
    return carImg.setAttribute('src', currentCar.imgSrc);
  }
};

checkSRC();

// Car Count
carImg.addEventListener('click', function() {
  console.log(currentCar.clicks+ 1);
  return carCount.innerHTML = currentCar.clicks += 1;
});

// Loop through cars, and grab the name property of each
for(i=0; i < cars.length; i++) {
  let car = cars[i];
  let carName = car.name;
  let carClicks = car.clicks

  // Create <li> to store the car names
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between lh-condensed';
  li.style.cursor = 'pointer';
  li.innerHTML = `<h4>${carName}</h4>`;
  
  // Updates the Car Image when the name is clicked 
  li.addEventListener('click', (function(carCopy){
    return function() {
      currentCar = car;
      carImg.setAttribute('src', car.imgSrc);
      carCount.innerHTML = currentCar.clicks;
    };
  }(car))
  );
  carList.appendChild(li);
  };
