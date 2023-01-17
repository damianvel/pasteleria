import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"
import ProductCardCart from '../productCardCart/ProductCardCart';
import CleanerButton from '../buttons/CleanerButton';
import Form from '../forms/Form';
import BuyBottom from '../buttons/BuyBottom';
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { Link } from 'react-router-dom';
import Order from '../orders/Order';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  


  const { cart, clear, getTotalPrice } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState({})
  const [isOrded, setIsOrder] = useState(false)
  const [order, setOrder] = useState([])


  const letsBuy = () => { setBuy(true) }

  const checkOut = () => {
    cart.map(x => {
      return updateDoc(doc(db, "products", x.id), { stock: x.stock - x.quantity })
    })
    clear()
  }



  console.log(orderId)

  if (cart.length === 0 ) {
    return (<> 
    
    
      { isOrded? <Order orderId={orderId}  order={order}></Order> :  <Link to="/" class="nav-item"> <h1>carrito vacio</h1> <h2>ver tienda</h2></Link>} </>) }

  else {
    return (
      <>  
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>

            {cart.map(element => {

              return (<Item key={element.id}>


                <ProductCardCart element={element}></ProductCardCart>

              </Item>)
            })}

          </Stack>
        </Box>

        <div>

          <h2>total en el carrito ${getTotalPrice()}</h2>
          <CleanerButton clear={clear}></CleanerButton></div>

        {buy ? (<Form cart={cart} setOrder={setOrder} setIsOrder={setIsOrder}  setOrderId={setOrderId} getTotalPrice={getTotalPrice}  checkOut={checkOut}></Form>) : <BuyBottom letsBuy={letsBuy} ></BuyBottom>}
      </>)
  }
}


