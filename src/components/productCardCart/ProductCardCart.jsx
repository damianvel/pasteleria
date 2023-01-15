import './productCardCart.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ProductCardCart = ({ element }) => {




  return (
    <>

<Card 

style={{
  border: "1px",
  color: "rgb(230,204,202)",
}}

sx={{ maxWidth: 800,  }}>
      <CardMedia
        component="img"
        height="40"
        image={element.img}
        alt="torta"
    
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
        {element.name}
        </Typography>
        <Typography variant="subtitle"  color="text.secondary">
          ${element.price} c/u, cantidad en el carrito: {element.quantity}, total en carito ${(element.price * element.quantity)}
        </Typography>
      </CardContent>     
    </Card>

    </>
  )
}

export default ProductCardCart

