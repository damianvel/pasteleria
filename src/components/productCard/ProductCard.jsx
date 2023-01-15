import { Link } from "react-router-dom"
import './productCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const ProductCard = ({ element }) => {

  return (
    <>

<Card 

style={{margin: "4%",
  padding: "4%",
  border: "2px",
  color: "rgb(230,204,202)",


}}

sx={{ maxWidth: 345,  }}>
      <CardMedia
        component="img"
        height="140"
        image={element.img}
        alt="torta"
    
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
        {element.name}
        </Typography>
        <Typography variant="body2"  color="text.secondary">
          ${element.price}
        </Typography>
      </CardContent>
      <CardActions>
      <Link  to={`/productDetail/${element.id}`} style={{textDecoration: 'none'}} >
        <Button style={{color: "rgb(230,204,202)" }} size="small">detalles</Button></Link>
      </CardActions>
    </Card>

    </>
  )
}

export default ProductCard

