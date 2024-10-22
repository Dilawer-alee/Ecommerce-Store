// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKwjpP_PU2bayKZ4VKX1genbJoZWYKfF8",
  authDomain: "ecommerce-store-ae4fb.firebaseapp.com",
  databaseURL: "https://ecommerce-store-ae4fb-default-rtdb.firebaseio.com",
  projectId: "ecommerce-store-ae4fb",
  storageBucket: "ecommerce-store-ae4fb.appspot.com",
  messagingSenderId: "1001024176460",
  appId: "1:1001024176460:web:5c0ea17821ddb14d304fe9",
  measurementId: "G-2BMK3V80NT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function SignUpUser(UserInfo) {
  const { email, password, fullName, age } = UserInfo;
  await createUserWithEmailAndPassword(auth, email, password);
  const users = { fullName, age, email };//pass kabhi bhi nhi dety 
  return addDoc(collection(db, 'users'), users);
}

function LoginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

async function addProduct(product) {
  const { title, description, price, image } = product
  const storageRef = ref(storage, 'products/' + image.name);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  return addDoc(collection(db, 'products'), { title, description, price, image: url });
}

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    products.push(data);
  });
  return products;
}

const getSingleProduct = async (id) =>{
    const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
   const data = docSnap.data();
   data.id=docSnap.id;
   return data
}

export {
  auth,
  SignUpUser,
  LoginUser,
  addProduct,
  getProducts,
  // getProductById,
  getSingleProduct,
  onAuthStateChanged,
  db,
  ref
};