import React from 'react'

const CartContext = React.createContext({
  searchValue: '',
  setSearchContextInput: () => {},
})

export default CartContext
