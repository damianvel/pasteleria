import React from 'react'
import { useState } from 'react'
import { collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { addDoc } from "firebase/firestore"



const Form = ({ cart, getTotalPrice, setOrderId, checkOut }) => {


    const [userData, setUserData] = useState({ name: "", phone: "", email: "" })

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log(userData)

        const order = {
            buyer: userData,
            items: cart,
            total: (getTotalPrice()),
            date: serverTimestamp()
        }


        const orderColection = collection(db, "orders")
        addDoc(orderColection, order)
            .then(res => setOrderId(res.id))
            .finally(() => setTimeout(()=>checkOut(), 2000))

    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    value={userData.name}
                    onChange={(event) =>
                        setUserData({ ...userData, name: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Ingrese su telefono"
                    name="phone"
                    onChange={(event) =>
                        setUserData({ ...userData, phone: event.target.value })
                    }
                    value={userData.phone}
                />
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    onChange={(event) =>
                        setUserData({ ...userData, email: event.target.value })
                    }
                    value={userData.email}
                />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    )


}
export default Form
