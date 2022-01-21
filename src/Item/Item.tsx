import Button from '@mui/material/Button'
import React from 'react'
//types
import {CartItemType} from '../App'
//styles
import {Wrapper} from './Item.styles'

type ItemProps={
    item:CartItemType;
    handleAddToCart:(clickedItem:CartItemType) =>void
}


const Item:React.FC<ItemProps>= ({item, handleAddToCart}) => {
    return( <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>
                {item.title}
            </h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add to cart
        </Button>
    </Wrapper>)
}

export default Item
