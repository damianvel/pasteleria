import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../productCard/ProductCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {


        const itemCollection = collection(db, "products")


if (categoryName){

    const q = query(itemCollection, where("category", "==", categoryName))
    getDocs(q)
    .then((res) => {
        // eslint-disable-next-line
        const products = res.docs.map(product => {
            return {

                ...product.data(), id: product.id
            }
        })
        setItems(products)
    })
    .catch((err) => console.log(err))

}else{



        getDocs(itemCollection)
            .then((res) => {
                // eslint-disable-next-line
                const products = res.docs.map(product => {
                    return {

                        ...product.data(), id: product.id
                    }
                })
                setItems(products)
            })
            .catch((err) => console.log(err))
        }



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
