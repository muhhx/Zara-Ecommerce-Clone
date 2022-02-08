import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Catalog from '../Pages/Catalog'
import Item from '../Pages/Item'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import User from '../Pages/User'
import Checkout from '../Pages/Checkout'
import Adm from '../Pages/Adm'
import Search from '../Pages/Search'
import Error from '../Pages/Error'

import PrivateRoute from './private'

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalog/:id' element={<Catalog />}/>
            <Route path='/product/:id' element={<Item />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route element={<PrivateRoute />}>
                <Route path='/user' element={<User />}/>
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path='/checkout' element={<Checkout />}/>
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path='/adm' element={<Adm />}/>
            </Route>
            <Route path='/search' element={<Search />}/>
            {/* <Route path='/ajuda' element={<div>This is ajuda</div>}/> */}
            <Route path='*' element={<Error />}/>
        </Routes>
    )
}