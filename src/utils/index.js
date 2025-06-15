// add card form localhost 
export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

export const addFavorite = (phone) => {
  const favorites = getFavorites();
  const isExist = favorites.find(p => p.id === phone.id)
  if(isExist) return console.log('phone already added');
  favorites.push(phone);
//   console.log(phone);
  localStorage.setItem("favorites", JSON.stringify(phone));
};


// remove card form localhost 
export const removeFavorite = id =>{
    const favorites = getFavorites()
    const remainignFavorites = favorites.filter(phone => phone.id !== id)
     localStorage.setItem("favorites", JSON.stringify(remainignFavorites))

}


// add card form localhost 
export const getCart= () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

export const addToCart = (phone) => {
  const cart = getCart();
  const isExist = cart.find(p => p.id === phone.id)
  if(isExist) return console.log('phone already added');
  cart.push(phone);
//   console.log(phone);
localStorage.setItem("cart", JSON.stringify(cart));
};


// remove card form localhost 
export const removeCart = id =>{
    const cart = getCart()
    const remainigCart = cart.filter(phone => phone.id !== id)
     localStorage.setItem("cart", JSON.stringify(remainignCart))

}