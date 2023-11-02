// src/App.js
import React ,{ useState , useEffect} from "react";
import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import Home from "./components/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import "./App.css"
;
import Items from './Items.jsx';


 

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const cartStorage=JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(cartStorage);
  useEffect(()=>{
    localStorage.setItem("cart" ,JSON.stringify(cart));
   
   
   
   });
   const openAside = () => {
    const aside = document.getElementById("aside");
    aside.classList.add("open");
  };
  const disAside = () => {
    const aside = document.getElementById("aside");

    aside.classList.remove("open");
  };
  const addCart = (item) => {
    let productItem = cart.find((product) => product.id === item.id);
    if (productItem) {
      productItem.quantity += 1;
      setCart([...cart]);
      Swal.fire(
        "Product is added successfully!",
        "You clicked the button!",
        "success"
      );
    } else {
      item.quantity = 1;
      setCart([item, ...cart]);
      Swal.fire(
        "Product is added successfully!",
        "You clicked the button!",
        "success"
      );
    }
  };
  const updateCartItem = (item) => {
    let productItem = cart.find((product) => product.id === item.id);

    if (productItem) {
      productItem.quantity += 1;
      setCart([...cart]);
      if (productItem.quantity === 0) {
        setCart(cart.filter((product) => product.id !== item.id));
      }
    } else {
      setCart([...cart]);
    }
  };

  const decCartItem = (item) => {
    let productItem = cart.find((product) => product.id === item.id);

    if (productItem) {
      productItem.quantity -= 1;
      setCart([...cart]);
      if (productItem.quantity === 0) {
        setCart(cart.filter((product) => product.id !== item.id));
      }
    } else {
      setCart([...cart]);
    }
  };
  const delItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const delAll = () => {
    setCart([]);
  };
  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const { email, username } = JSON.parse(loggedInUserData);
      setLoggedInUser(email);
      setLoggedInUsername(username);
    }
  }, []);

  const handleLogin = (userEmail, userUsername) => {
    setLoggedInUser(userEmail);
    setLoggedInUsername(userUsername);
    localStorage.setItem("loggedInUser", JSON.stringify({ email: userEmail, username: userUsername }));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUser");
  };
  
  return (
    <>

     <Router>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      PRODUCT MANAGEMENT
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products/add">
              Add Product
            </Link>
          </li>
        
<li className="nav-item">
   <Link className="link p-2 " onClick={openAside}  ><FontAwesomeIcon icon={faCartShopping}className="fa-cart"  /> <span className="count ms-sm-0 ps-lg-4 ms-lg-2 ">{cart.length}</span></Link>
</li>


         








            {!loggedInUser ? (

              <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
             <Link className="nav-link" to="/login">
               Login
             </Link>
           </li>
              </>
             
            ):<>
                 <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            
            
            
            </>
          
          
          }
         

<li className="nav-item">
<Link to="/items">
  items
</Link>
</li>



        </ul>
      </div>
    </nav>
    <aside id="aside">
            <div className="icon">
              <FontAwesomeIcon icon={faX} onClick={disAside} />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>quantity</th>
                  <th>Price</th>
                  <th>All</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.img} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <span
                        className="btn btn-success"
                        onClick={() => updateCartItem(item)}
                      >
                        +
                      </span>
                      <span className="quantity">{item.quantity}</span>
                      <span
                        className="btn btn-danger"
                        onClick={() => decCartItem(item)}
                      >
                        -
                      </span>
                    </td>
                    <td>{item.price}.00$</td>
                    <td className="all-price">{item.price * item.quantity}</td>
                    <td>
                      {" "}
                      <button onClick={() => delItem(item.id)}>
                        {" "}
                        Delete{" "}
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="side-bottom">
              <button className="btn btn-danger " onClick={delAll}>
                Delete All
              </button>
            </div>
          </aside>
      <Routes>
 
      <Route index path="/" exact element={<Home/>} />
        <Route path="/products"  element={<ProductList addCart={addCart}/>} />
        <Route path="/items"  element={<Items addCart={addCart}/>} />

        <Route path="/products/add" element={<ProductForm/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/products/edit/:id" element={<EditProduct/>} />
        <Route path="/products/delete/:id" element={<DeleteProduct/>} />

        <Route path="/register" element={ <Register />}/>
        <Route path="/login" element={ <Login onLogin={handleLogin} />}/>
     
        <Route path="/profile" element={  <UserProfile email={loggedInUser}    username={loggedInUsername} />}/>


      </Routes>
    </Router>

    </>
   
    
   

  );
}

export default App;
