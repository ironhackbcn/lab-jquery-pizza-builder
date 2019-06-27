// Buttons variables to be accessible
var pepperonniBtn = document.getElementsByClassName("btn-pepperonni");
var mushroomsBtn = document.getElementsByClassName("btn-mushrooms");
var greenPeppersBtn = document.getElementsByClassName("btn-green-peppers");
var sauceBtn = document.getElementsByClassName("btn-sauce");
var crustBtn = document.getElementsByClassName("btn-crust");
// Prices variables to be accessible
var whiteSaucePrice = document.getElementById("white-sauce-price");
var glutenFreePrice = document.getElementById("gluten-price");
var peperonniPrice = document.getElementById("pep-price");
var mushroomsPrice = document.getElementById("mush-price");
var greenPepperPrice = document.getElementById("pepper-price");
// Total price starts at 13$ (10+3 dels ingredients by default)
var totalPrice = 13;
var pricePanel = document.querySelector("strong");

window.onload = function() {
  //Button event listeners
  pepperonniBtn[0].addEventListener("click", addPepperonni);
  mushroomsBtn[0].addEventListener("click", addMushrooms);
  greenPeppersBtn[0].addEventListener("click", addGreenPepper);
  sauceBtn[0].addEventListener("click", addWhiteSauce);
  crustBtn[0].addEventListener("click", addGlutenFreeCrust);
  //Default price settings
  whiteSaucePrice.style.display = "none";
  glutenFreePrice.style.display = "none";
  //Price panel updated onload
  getTotalPrice();
};

//click counters
var pepperonniCounter = 0;
var mushroomCounter = 0;
var greenPepperCounter = 0;
var sauceCounter = 0;
var crustCounter = 0;

// TO ADD AND REMOVE TOPPINGS

function addPepperonni() {
  var pepperonni = Array.from(document.getElementsByClassName("pep"));
  pepperonniCounter++;
  if (pepperonniCounter === 1 || pepperonniCounter % 2 !== 0) {
    pepperonni.forEach(function(pep) {
      pep.style.display = "none";
      pepperonniBtn[0].classList.remove("active");
      peperonniPrice.style.display = "none";
    });
    totalPrice = totalPrice - 1;
  } else if (pepperonniCounter === 2 || pepperonniCounter % 2 === 0) {
    pepperonni.forEach(function(pep) {
      pep.style.display = "block";
      pepperonniBtn[0].classList.add("active");
      peperonniPrice.style.display = "block";
    });
    totalPrice = totalPrice + 1;
  }
  getTotalPrice();
}

function addMushrooms() {
  var mushrooms = Array.from(document.getElementsByClassName("mushroom"));
  mushroomCounter++;
  if (mushroomCounter === 1 || mushroomCounter % 2 !== 0) {
    mushrooms.forEach(function(mushroom) {
      mushroom.style.display = "none";
      mushroomsBtn[0].classList.remove("active");
      mushroomsPrice.style.display = "none";
    });
    totalPrice = totalPrice - 1;
  } else if (mushroomCounter === 2 || mushroomCounter % 2 === 0) {
    mushrooms.forEach(function(mushroom) {
      mushroom.style.display = "block";
      mushroomsBtn[0].classList.add("active");
      mushroomsPrice.style.display = "block";
    });
    totalPrice = totalPrice + 1;
  }
  getTotalPrice();
}

function addGreenPepper() {
  var greenPeppers = Array.from(
    document.getElementsByClassName("green-pepper")
  );
  greenPepperCounter++;
  if (greenPepperCounter === 1 || greenPepperCounter % 2 !== 0) {
    greenPeppers.forEach(function(pepper) {
      pepper.style.display = "none";
      greenPeppersBtn[0].classList.remove("active");
      greenPepperPrice.style.display = "none";
    });
    totalPrice = totalPrice - 1;
  } else if (greenPepperCounter === 2 || greenPepperCounter % 2 === 0) {
    greenPeppers.forEach(function(pepper) {
      pepper.style.display = "block";
      greenPeppersBtn[0].classList.add("active");
      greenPepperPrice.style.display = "block";
    });
    totalPrice = totalPrice + 1;
  }
  getTotalPrice();
}

function addWhiteSauce() {
  var sauce = Array.from(document.getElementsByClassName("sauce"))[0];
  sauceCounter++;
  if (sauceCounter === 1 || sauceCounter % 2 !== 0) {
    sauce.classList.add("sauce-white");
    sauceBtn[0].classList.add("active");
    whiteSaucePrice.style.display = "block";
    totalPrice = totalPrice + 3;
  } else if (sauceCounter === 2 || sauceCounter % 2 === 0) {
    sauce.className = "sauce";
    sauceBtn[0].classList.remove("active");
    whiteSaucePrice.style.display = "none";
    totalPrice = totalPrice - 3;
  }
  getTotalPrice();
}

function addGlutenFreeCrust() {
  var crust = Array.from(document.getElementsByClassName("crust"))[0];
  crustCounter++;
  if (crustCounter === 1 || crustCounter % 2 !== 0) {
    crust.className = "crust crust-gluten-free";
    crustBtn[0].classList.add("active");
    glutenFreePrice.style.display = "block";
    totalPrice = totalPrice + 5;
  } else if (crustCounter === 2 || crustCounter % 2 === 0) {
    crust.className = "crust";
    crustBtn[0].classList.remove("active");
    glutenFreePrice.style.display = "none";
    totalPrice = totalPrice - 5;
  }
  getTotalPrice();
}

function getTotalPrice() {
  pricePanel.innerHTML = `$${totalPrice}`;
}
