import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from "../Config/Firebase";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/themeSlice';
// import { useSelector } from 'react-redux';
import './Dashboard.css';


export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const [user, setUser] = useState();
  const color = useSelector(state => state.color);
  const cart = useSelector((state) => state.cartStore.cart);
  const theme = useSelector((state) => state.themeStore); 

  const auth = getAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     }
  //   });
  // }, []);

  const Logout = async () => {
    try {
      await signOut(auth);
      alert("Successfully logged out");
      navigate('/');  
    } catch (error) {
      console.error("Error logging out:", error);
      alert(error.message);
    }
  };

  const goToDetail = (product) => {
    navigate('/detail/' + product.id);
  };

  // const handleToggleChange = (e) => {
  //   const isChecked = e.target.checked;
  //   dispatch(
  //     setTheme({
  //       color: isChecked ? '#262527' : 'white',
  //       textColor: isChecked ? 'white' : 'black',
  //     })
  //   );
  // };

  return (
    // <div style={{ background: color }}>
    <div
    className=" "
    style={{ backgroundColor: theme?.color, color: theme?.textColor }}
  > 
      <div className="container ">
        
      
        <h1 className="title ">Welcome</h1>
        <button onClick={() => navigate('/addProduct')} className='border-b-2 
        border-transparent hover:border-red-500 bg-transparent -mt-[100px] ml-[200px] 
        w-[100px] h-[1300px]rounded-sm absolute  text-white'>
          Add Product
        </button>
        <button onClick={Logout} className='bg-red-500 text-white py-2 px-4 rounded-md 
        ml-[500px] -mt-[103px] absolute'>
          Logout
        </button>
        <div className="product-grid relative" >
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item)}
              className="product-card"
            >
              <img src={item.image} alt={item.title} className="product-image" />
              <div className="">
                <h5 className="text-lg font-semibold text-gray-800 -mb-3">{item.title}</h5>
                {/* <p className="text-sm text-gray-600 mb-2">{item.description}</p> */}
                <p className="text-sm text-black font-bold">{item.description}</p>

                <p className="text-md font-bold text-gray-900 mb-2">Rs: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
