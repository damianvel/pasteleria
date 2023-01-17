import { Link } from "react-router-dom"
import './productCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const DetailsCard = ({ order, orderId }) => {

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Su numero de orden es: {orderId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El total de su compra es: {order.total}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/`} style={{ textDecoration: 'none' }} >
            <Button style={{ color: "rgb(230,204,202)" }} size="small">volver a comprar</Button></Link>
        </CardActions>
      </Card>

    </>
  )
}

export default DetailsCard

