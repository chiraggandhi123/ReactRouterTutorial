import React, { useState, useEffect } from 'react';
import Card from './Card/Card'

function Shop() {
    useEffect(() => {
        async function getData() {
            const data = await (await fetch('https://fakestoreapi.com/products?limit=10')).json();
            console.log(data)
            setItems(data)
        }
        getData();

    }, [])
    const [items, setItems] = useState([]);
    return (
        <div className="products">
            {items.map(item=><Card key={item.id} data={item} />)}
        </div>
    )
}

export default Shop;