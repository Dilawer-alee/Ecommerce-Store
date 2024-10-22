import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { incrementQuantity, decrementQuantity, removeCart } from '../store/cartSlice';
import { setTheme } from '../store/themeSlice';
import './Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const cart = useSelector((state) => state.cartStore.cart);
  const theme = useSelector((state) => state.themeStore); 

  const [popupOpen, setPopupOpen] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleCartClick = () => {
    setPopupOpen(true);
  };

  const handleToggleChange = (e) => {
    const isChecked = e.target.checked;
    dispatch(
      setTheme({
        color: isChecked ? '#262527' : 'white',
        textColor: isChecked ? 'white' : 'black',
      })
    );
  };

  return (
//     <div
//   className={`relative ${theme.color === 'white' ? 'bg-white text-black' : 'bg-[#262527] text-white'}`}
// >
 

    <div
    className=" "
    style={{ backgroundColor: theme?.color, color: theme?.textColor }}
  > 
      <div className="cart-icon-container bg-[#131921] w-[1360px] h-[70px] fixed top-0 -ml-[10px]">
        <h1 className="text-center text-white text-xs mt-20 ml-[80px] absolute">{user?.email}</h1>
        <i className="fa-brands fa-amazon text-4xl text-white mt-[9px] ml-[50px]"></i>
        <span className="text-2xl text-white">mazon</span>
        <p className="ml-[200px] -mt-[44px] absolute text-[#EAEDED]">
          Deliver to <span className="block text-white -mt-[5px]">Pakistan</span>
        </p>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded-sm text-black w-[600px] h-[40px] ml-[150px] -mt-14 border-none"
        />
        <span>
          <i className="fa-solid fa-magnifying-glass text-white ml-0 rounded-sm 
          pl-2 pr-2 pt-1 text-lg bg-[#F3A847] mt-4 absolute w-[40px] h-[40px]"></i>
        </span>
      </div>

      <div className="bg-[#232F3E] mt-0 w-[1360px] h-10 -ml-[4px]">
        <ul className="text-white flex justify-center gap-4 pt-1 mr-[180px]">
         {/* <a href='#' className=''> <li className='hover:border-red-500 border-transparent'>Todays Deals</li></a> */}
         <a href="#" className="block">
  <li className="border-b-2 border-transparent ">Todays Deals</li></a>
         <a href='#'> <li>Customer Service</li></a>
         <a href='#'> <li>Registry</li></a>
         <a href='#'> <li>Gift Cards</li></a>
          <a href='#'><li>Sell</li></a>
        </ul>
      </div>

      {/* <div className="ml-[1070px] -mt-[90px] absolute">
        <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full
         bg-gray-300 transition">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleToggleChange}
          />
          <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full
           bg-gray-300 ring-[6px] ring-inset ring-white transition-all
            peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent">
      
            </span>
        </label>
      </div> */}
      
      <div className="ml-[1180px] -mt-[90px] absolute">
  <label className="inline-flex items-center relative">
    <input 
      className="peer hidden sr-only" 
      id="toggle" 
      type="checkbox" 
      onChange={handleToggleChange} 
    />
    <div
      className="relative w-[60px] h-[30px] bg-gray-300 peer-checked:bg-zinc-500 rounded-full after:absolute 
                 after:content-[''] after:w-[24px] after:h-[24px] after:bg-gradient-to-r from-orange-500 
                 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full 
                 after:top-[3px] after:left-[3px] active:after:w-[30px] peer-checked:after:left-[55px] 
                 peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
    ></div>

    <svg
      height="16"
      width="16"
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[8px]"
    >
      <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
    </svg>

    <svg
      height="16"
      width="16"
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[8px]"
    >
      <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121
      ,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,
      2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,
      2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,
      24Zm.074-22a10.776,10.776,0,0,0-1.675.127,
      10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
    </svg>
  </label>
</div>




      <i
        className="fa-solid fa-cart-plus custom-icon-width absolute top-[20px]
         left-[1300px] text-3xl text-white-600 z-10 text-yellow-400"
        onClick={handleCartClick}
      ></i>

      <div className="number-icon absolute top-[24px] left-[1290px] text-white
       bg-red-600 rounded-3xl w-6 h-6 -mt-5 pl-[5px] pb-[6px] text-xl z-20">
        {cart.length}
      </div>

      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        position="right center"
        modal
        className="custom-popup"
      >
        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image w-10" />
                <div className="cart-item-details">
                  <div className="item flex gap-14">
                    <p><strong>{item.title}</strong></p>
                    <p className="text-sm font-semibold mt-1">Rs {item.price * item.quantity}</p>
                    <p className="quantity-text">Quantity:</p>
                    <div className="quantity-wrapper">
                      <button onClick={() => dispatch(decrementQuantity(item.id))} 
                      className="decrement text-2xl w-7 bg-slate-300">-</button>
                      <span className="quantity-text">{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(item.id))} 
                      className="increment text-2xl w-7 bg-slate-300">+</button>
                    </div>
                  </div>
                  <button onClick={() => dispatch(removeCart(item.id))} className="removeCart">
                    Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setPopupOpen(false)} className="close-button">Close</button>
      </Popup>
    </div>
  )
}