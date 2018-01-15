var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var nuCart = {};
  nuCart[item] = Math.floor(Math.random() * 100);
  cart.push(nuCart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var nuValues = [];
  var nuKeys = [];
  var nuObj = {};
  for (var i = 0; i < cart.length; i++) {
    nuObj = cart[i];
    nuKeys.push(Object.keys(nuObj))
  }
  for (i = 0; i < cart.length; i++) {
    nuObj = cart[i];
    nuValues[i] = nuObj[nuKeys[i]];
  }
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${nuKeys[0]} at $${nuValues[0]}.`);
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${nuKeys[0]} at $${nuValues[0]} and ${nuKeys[1]} at $${nuValues[1]}.`);
  }
  else {
    var nuStatements = [];
    for (i = 0; i < cart.length; i++) {
      nuStatements[i] = `${nuKeys[i]} at $${nuValues[i]}`;
    }
    var nuLast = nuStatements.splice(-1);
    console.log(`In your cart, you have ${nuStatements.join(", ")}, and ${nuLast}.`);
  }
}

function total() {
  var nuObj = {};
  var nuKeys = [];
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    nuObj = cart[i];
    nuKeys.push(Object.keys(nuObj));
  }
  for (i = 0; i < cart.length; i++) {
    var addThis = cart[i][nuKeys[i]];
    total += addThis;
  }
  return total;
}

function removeFromCart(item) {
  var nuObj = {};
  var nuKeys = [];
  for (var i = 0; i < cart.length; i++) {
    nuObj = cart[i];
    nuKeys.push(Object.keys(nuObj));
  }
  for (i = 0; i < cart.length; i++) {
    if (nuKeys[i] == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}
