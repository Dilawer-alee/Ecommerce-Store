import { useState } from "react";
import { addProduct } from "../Config/Firebase.js";

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    if (!title || !description || !price || !image) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await addProduct({ title, description, price, image });
      alert("Product added successfully!");
      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
      setImagePreview(null);
      setError("");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show image preview
  };

  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-black text-center mb-6 text-2xl font-semibold">Add Product</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          placeholder="Price"
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />

        {imagePreview && (
          <div className="mb-4">
            <img
              src={imagePreview}
              alt="Image Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}

        <button
          onClick={onSubmit}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Upload Product
        </button>
      </div>
    </div>
  );
}
