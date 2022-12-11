import { products } from "../../productsMock"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../productCard/ProductCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ItemListContainer = () => {



    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {

        const filtrados = products.filter(x => x.category === categoryName)

        const task = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryName ? filtrados : products)
            }, 1000);

        })
        task.then((res) => { setItems(res) })
 }, [categoryName])

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>                  
                        {items.map((element) => {
                            return (
                                <>  <Grid item xs={4} md={4}>
                                    <ProductCard key={element.id} element={element} />  </Grid>
                                </>
                            )
                        })
                        }                  
                    </Grid>
            </Box>
        </>
    )
}

export default ItemListContainer
