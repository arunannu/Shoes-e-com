import React, { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";
import axios from "axios";
const shoesImage = [
  "https://wallpapercave.com/wp/3eaIVZM.jpg",
  "https://www.knittingindustry.com/uploads/1948/247612.jpg",
  "https://th.bing.com/th/id/OIP.Yths268wEgDF53CWjMErFQHaHa?rs=1&pid=ImgDetMain",
  "https://images-na.ssl-images-amazon.com/images/I/81GPQHHDgRL._AC_UL1500_.jpg",
];
const simg1 = shoesImage[0];
const simg2 = shoesImage[1];
const simg3 = shoesImage[2];
const simg4 = shoesImage[3];
const MyContext = createContext();

const AppContext = (props) => {
  const authCtx = useContext(AuthContext);

  const productList = [
    {
      id: "shoes1",
      title: "Nike",
      price: 1799,
      imageUrl: simg1
        
    },
    {
      id: "shoes2",
      title: "Addidas",
      price: 3299,
      imageUrl: simg2
        
    },
    {
      id: "shoes3",
      title: "Gussi",
      price: 7099,
      imageUrl: simg3
        
    },
    {
      id: "shoes4",
      title: "Lakhani",
      price: 10099,
      imageUrl: simg4
        
    },
  ];

  const [cart, setCart] = useState([]);

  const addItem = async (id) => {
    try {
      const addedProduct = productList.find((product) => product.id === id);
      const addedProductIndex = cart.find((product) => product.id === id);
      if (addedProductIndex) {
        alert("The item is already in the cart!!");
      }
      if (addedProduct && !addedProductIndex) {
        const userMail = localStorage.getItem("email");
        const response = await axios.post(
          `https://crudcrud.com/api/0803a8be24d84c2b92800cab9d99e585/cart${userMail}`,
          addedProduct
        );
        const addedProductWithId = { ...addedProduct, _id: response.data._id };
        setCart((prevCart) => [...prevCart, addedProductWithId]);
      }
    } catch (err) {
      console.log("Product not added- " + err);
    }
  };

  const removeItem = async (itemid, id) => {
    try {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemid));
      const userMail = localStorage.getItem("email");
      await axios.delete(
        `https://crudcrud.com/api/0803a8be24d84c2b92800cab9d99e585/cart${userMail}/${id}`
      );
    } catch (err) {
      console.log("Item not removed- " + err);
    }
  };
  const fetchItems = async () => {
    try {
      const userMail = localStorage.getItem("email");
      const response = await axios.get(
        `https://crudcrud.com/api/0803a8be24d84c2b92800cab9d99e585/cart${userMail}`
      );
      setCart(response.data);
    } catch (err) {
      console.log("Fetch Items failed- " + err);
    }
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchItems();
    }
  }, [authCtx.userEmail, authCtx.isLoggedIn]);

  return (
    <MyContext.Provider value={{ productList, cart, addItem, removeItem }}>
      {props.children}
    </MyContext.Provider>
  );
};

export { AppContext, MyContext };
