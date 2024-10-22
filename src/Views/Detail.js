import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../Config/Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function Detail() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);

  useEffect(() => {
    const getSingleProductData = async () => {
      const product = await getSingleProduct(params.adId);
      setProduct(product);
    };
    getSingleProductData();
  }, [params.adId]);

  return (
    <div style={{ background: color }} className="flex items-center justify-center py-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Detail Page</h1>
        <div className="flex flex-col items-center">
          <div className="w-full mb-4">
            {product.image && (
              <img className="w-full h-48 object-cover rounded-md" src={product.image} alt={product.title} />
            )}
          </div>
          <h1 className="text-xl font-semibold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-center my-2">{product.description}</p>
          <p className="text-lg font-semibold text-gray-800">Price: ${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
