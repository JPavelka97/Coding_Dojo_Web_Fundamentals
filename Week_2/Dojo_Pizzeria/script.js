function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzerela"], ["pepperoni, sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza3 = pizzaOven("thin crust","alfredo",["mozzarella","provel"],["ham","bacon"]);
var pizza4 = pizzaOven("stuffed crust","bbq sauce",["'cheddar","provalone"],["pepperoni","steak"]);


console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);