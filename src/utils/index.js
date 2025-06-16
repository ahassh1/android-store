// // add card form localhost 
// export const getFavorites = () => {
//   const favorites = localStorage.getItem("favorites");
//   if (favorites) return JSON.parse(favorites);
//   return [];
// };

// export const addFavorite = (phone) => {
//   const favorites = getFavorites();
//   const isExist = favorites.find(p => p.id === phone.id)
//   if(isExist) return toast.error('phone already added');
//   favorites.push(phone);
//   toast.success('Phone Added Successfully !')
//   //   console.log(phone);
//   localStorage.setItem("favorites", JSON.stringify(phone));
// };


// // remove card form localhost 
// export const removeFavorite = id =>{
//   const favorites = getFavorites()
//   const remainignFavorites = favorites.filter(phone => phone.id !== id)
//      localStorage.setItem("favorites", JSON.stringify(remainignFavorites))

//      toast.success('Removed Successfully !!')
// }


// // add card form localhost 
// export const getCart= () => {
//   const cart = localStorage.getItem("cart");
//   if (cart) return JSON.parse(cart);
//   return [];
// };

// export const addToCart = (phone) => {
//   const cart = getCart();
//   const isExist = cart.find(p => p.id === phone.id)
//   if(isExist) return toast.error('phone already added');
//   cart.push(phone);
//   toast.success('Phone Added Successfully !')
//   //   console.log(phone);
// localStorage.setItem("cart", JSON.stringify(cart));
// };



// export const removeCart = id =>{
//     const cart = getCart()
//     const remainignCart = cart.filter(phone => phone.id !== id)
//      localStorage.setItem("cart", JSON.stringify(remainignCart))

// }


import toast from 'react-hot-toast'

export const getFavorites = () => {
  let favorites = []
  const storedFavorites = localStorage.getItem('favorites')
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites)
  }
  return favorites
}
export const addFavorite = phone => {
  let favorites = getFavorites()
  const isExist = favorites.find(b => b.id === phone.id)
  if (isExist) return toast.error('Already Added!')

  favorites.push(phone)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Phone added Successfully!')
}

export const removeFavorite = id => {
  let favorites = getFavorites()
  const remaining = favorites.filter(b => b.id !== id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Phone Removed from Favorite List!')
}

export const getCart = () => {
  let cart = []
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart = JSON.parse(storedCart)
  }
  return cart
}
export const addToCart = phone => {
  let cart = getCart()
  const isExist = cart.find(b => b.id === phone.id)
  if (isExist) return toast.error('Already Added!')

  cart.push(phone)
  localStorage.setItem('cart', JSON.stringify(cart))
  toast.success('Cart Updated!')
}