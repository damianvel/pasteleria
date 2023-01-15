import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"
import ProductCardCart from '../productCardCart/ProductCardCart';
import CleanerButton from '../buttons/cleanerButton';
import Form from '../forms/form';
import BuyBottom from '../buttons/buyBottom';
import Swal from 'sweetalert2';



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
  const [orderId, setOrderId] = useState(null)
  const letsBuy = () => { setBuy(true) }

  const checkOut = () => {

    Swal.fire(
      {
        title: `su numero de orden es = ${orderId}`
      }
    )
    clear()

  }




  if (cart.length === 0) {
    return (<> <h2>el carrito está vacio</h2>  </>)
  }
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
        {buy ? (<Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} checkOut={checkOut}></Form>) : <BuyBottom letsBuy={letsBuy} ></BuyBottom>}
      </>)
  }
}


