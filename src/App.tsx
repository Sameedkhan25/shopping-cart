import {useState} from 'react';
import {useQuery} from 'react-query';

//components
import Item from './Item/Item'

import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import AddShoppingCart from '@mui/material/Icon';

//styles
import {StyledButton, Wrapper} from './App.styles'

//types
export type CartItemType ={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}

const getProducts = async ():Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();



const  App=()=> {
  const [cartOpen,setCartOpen] =useState(false)
  const [cartItems,setCartItems] =useState([] as CartItemType[])

  const {data,isLoading,error} =useQuery<CartItemType[]>('products',getProducts)
  console.log({data});


  const getTotalItems=(items:CartItemType[])=>null;
  const handleAddToCart =(clickedItem:CartItemType)=>null;
  const handleRemoveFromCart =()=>null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>something went wrong...</div>
  return (
  <Wrapper>
    <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
      cart goes here

    </Drawer>
    <StyledButton onClick={()=>setCartOpen(true)}>
      <Badge badgeContent={getTotalItems(cartItems)} color="error">
        <AddShoppingCart/>
      </Badge>
    </StyledButton>
   <Grid container spacing={3}>
    {data?.map(item=> (
      <Grid item key={item.id} xs={12} sm={4}>
        <Item item={item} handleAddToCart={handleAddToCart}/>
      </Grid>
    ))
    }
    </Grid>
  </Wrapper>
  );
}

export default App;
