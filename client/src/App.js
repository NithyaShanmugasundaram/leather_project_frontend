import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Bags from './components/Bags';
import Wallet from './components/Wallet';
import Belts from './components/Belts';
import Pouches from './components/Pouches';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { USER_LOADED, LOGOUT } from './actions/types';


function App() {
  useEffect(() => {


    // check for token in LS when app first runs
    if (localStorage.token) {

      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch({ type: USER_LOADED });

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        {/* <Route path="/" element={<Landing />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="bags" element={<Bags />}></Route>
        <Route path="wallets" element={<Wallet />}></Route>
        <Route path="belts" element={<Belts />}></Route>
        <Route path="pouches" element={<Pouches />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
