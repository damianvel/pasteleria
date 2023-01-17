import '../../components/productCardCart/productCardCart.css';
import * as React from 'react';
import DetailsCard from '../productCard/DetailsCard';






const Order = ({ orderId, order}) => {


    return (
        <>
            {(orderId)  ? <DetailsCard orderId={orderId} order={order} ></DetailsCard> : null} 
        </>
    )
}

export default Order

