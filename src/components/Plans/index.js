import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import './Plans.css';
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get()
        .then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ("prices").get();
                priceSnap.docs.forEach(price=> {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })     
            })
            setProducts(products);
        })
    }, []);

    console.log(products)

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        docRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data()
            if(error) {
                alert(`An error occured: ${error.message}`);
            }

            if (sessionId) {
                const stripe = await loadStripe()
            }
        })
    }

    return (
        <div className = "plansScreen">
            {Object.entries(products).map(([productId, productData]) => {
                // add some logic to check oif the user's subsciption is active...
                return (
                    <div className = "plansScreen_plan">
                        <div className = "plansScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick = {() => loadCheckout(productData.prices.priceId)}>subscribe</button>
                    </div>
                )
            } )}
        </div>
    )
}

export default Plans
