import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';

// import About from './components/About';

import Navbar from './components/Navbar';
import OrderPlaced from './components/OrderPlaced';
import {NoMatchRoute} from './components/NoMatchRoute';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProduct';
import NewProducts from './components/NewProduct';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserAdmin from './components/UserAdmin';
import { Profile } from './components/Profile';
import { Auth } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

const LazyAbout=React.lazy(()=>import('./components/About')) //making about component as lazy load

function App() {
  return (
    //fragments to add a parent component
    <>
    <Auth>  
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>

      <Route path='/about' element={
        <React.Suspense fallback="Loading......">
             <LazyAbout />
        </React.Suspense>}>
      </Route>

      <Route path='orderplaced' element={<OrderPlaced />}></Route>
      <Route path='products' element={<Products />}>
      {/* //nested routes-->here path is formed correctly nested but not to know what to do to render child components...so use Outlet comp in the coressponding parent component */}
        <Route index element={<FeatureProducts />}></Route> {/*//Index routing */}
        <Route path='featured' element={<FeatureProducts />}></Route>
        <Route path='new' element={<NewProducts />}></Route>
      </Route>
      <Route path='users' element={<UserList />}>
      <Route path=':id' element={<UserDetails />}></Route> {/*//Dynamic routing */}
      <Route path='admin' element={<UserAdmin />}></Route>
      </Route>
      <Route path='profile' element={<RequireAuth> <Profile/> </RequireAuth>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<NoMatchRoute />}></Route> {/* //*-->when no other route matches */}
    </Routes>
    </Auth>
    </>
  );
}

export default App;
