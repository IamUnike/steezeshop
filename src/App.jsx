//component imports
import Header from "./Components/Header"
import Home from "./Components/Home"
import MobileMenu from "./Components/MobileMenu"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import ProductDescription from "./Components/ProductDescription"
import Checkout from './Components/Checkout'
import ErrorPage from "./Components/ErrorPage"

//routing imports
import {BrowserRouter, Route, Routes } from "react-router-dom"
//usestate
import { useState, useEffect } from "react"
//context api
import { createContext } from "react"
export const steezeContext = createContext()

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  // const [products, setProducts] = useState([])

  
  //changing navigation btn sign for each click and reseting it on route change
   const [navState, setNavState] = useState(false)
   const resetNavState = () => {
        setNavState(!navState)
    }

    // useEffect(() => {
    //   const getProducts = async () => {
    //     const response = await fetch('../../database/data.json');
    //     const data = await response.json();
    
    //     const modifiedData = data.map((product) => {
    //       return {
    //         ...product,
    //         initialPrice: Math.round(product.initialPrice),
    //         price: Math.round(product.price),
    //       };
    //     });
    
    //     setProducts(modifiedData);
    //   };
    
    //   getProducts();
    // }, []);
    

    
    //list of products
    const [products, setProducts] = useState([
      {
        id:1,
        title:"Opna Women's Short Sleeve Moisture",
        initialPrice: Math.round(7.95),
        price:Math.round(7.95),
        description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        rating:{rate:4.5, count:146},
        quantity: 1
    },
    
    {
      id:2,
      title:"Mens Casual Premium Slim Fit T-Shirts ",
      initialPrice: Math.round(22.3),
      price:Math.round(22.3),
      description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      quantity: 1,
      rating:{rate:4.1, count:259}
  },

  {
    id:3,
    title:"Mens Cotton Jacket",
    initialPrice: Math.round(43.6),
    price:Math.round(43.6),
    description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    quantity: 1,
    "rating":{rate:4.7, count:500}
},

{
    id:4,
    title:"Mens Casual Slim Fit",
    initialPrice: Math.round(15.99),
      price:Math.round(15.99),
    description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    quantity: 1,
    rating:{rate:2.1,count:430}
},

  
    ]);

    
    const [cart, setCart] = useState([])
   
    const addToCart = (addedProduct) => {
      const existingCartItem = cart.find((cartItem) => cartItem.id === addedProduct.id);

      
      alert(addedProduct.title + ' added to your cart')
    
      if (existingCartItem) {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === addedProduct.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              price: cartItem.price + cartItem.initialPrice,
            };
          }
          return cartItem;
        });
    
        setCart(updatedCart);
      } else {
        setCart([...cart, addedProduct]);
      }
    };
    
    

    const deleteCartItem = (id) => {
      const updatedCart = cart.filter(cartItem => (
          cartItem.id !== id
      ))
      setCart(updatedCart)
    }

    const increaseQuantity = (id) => {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          const newQuantity = cartItem.quantity + 1;
          const newPrice = cartItem.price + cartItem.initialPrice;
          
          return {
            ...cartItem,
            quantity: newQuantity,
            price: newPrice,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    };

    
  const decreaseQuantity = (id) => {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity > 1) {
          
          const newQuantity = cartItem.quantity - 1;
          const newPrice = cartItem.price - cartItem.initialPrice;

          return {
            ...cartItem,
            quantity: newQuantity,
            price: newPrice,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    };

    // Calculate subtotal
  const subtotal = cart.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.price;
  }, 0);

  // Calculate total (subtotal + shipping)
  const total = subtotal + 10; // Assuming shipping cost is $10
  
  //empty cart on checkout
  const emptyCartOnCheckout = () => {
    setCart([])
  }


  return (
    <div className="app-container">
      
    <steezeContext.Provider value={{navState, setNavState, resetNavState, products, setProducts, addToCart, cart, setCart, deleteCartItem, increaseQuantity, decreaseQuantity, subtotal, total, emptyCartOnCheckout}}>
      <BrowserRouter>
        <Header />

        <div className="contents"> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDescription />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>

        <MobileMenu />
      </BrowserRouter>
    </steezeContext.Provider>
      
    </div>
  )
}

export default App


