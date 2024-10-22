import { useEffect,useState } from 'react';
import AppRouter from './Config/Router';
import { onAuthStateChanged,auth } from './Config/Firebase';
// import Header from "./Component/Header"
import {store,persistor} from "./store"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
function App() {
  // const [user,setUser]=useState()

//   useEffect(()=>{
//   onAuthStateChanged(auth,(user) => {
//     if(user){
// console.log('user logged in',user);
//     setUser(user)
//    const uid=user.uid; 

//     }else{

//     }

//   });
//   },[])
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
      <div className="App">
      <header className="App-header">   
        {/* <Header/>   */}
       
        <AppRouter/>
      </header>
     </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
 